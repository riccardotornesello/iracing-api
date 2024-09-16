import humps from "humps"

import { API_URL } from "../consts"
import { createLogger } from "../logger"
import { RateLimiter } from "../rate-limiter"
import type { FetchCookie, Options } from "../types"
import { IracingDataApiException } from "../exceptions"

const { camelizeKeys, decamelizeKeys } = humps

export class API {
  fetchCookie: FetchCookie
  options: Options
  rateLimiter: RateLimiter
  logger: (...args: unknown[]) => void

  constructor(
    fetchCookie: FetchCookie,
    options: Options,
    rateLimiter: RateLimiter
  ) {
    this.fetchCookie = fetchCookie
    this.options = options
    this.rateLimiter = rateLimiter
    this.logger = createLogger(options)
  }

  _getData = async <Data = Record<string, unknown>, Parameters = void>(
    endpoint: string,
    params?: Parameters | Record<string, unknown>
  ): Promise<Data | undefined> => {
    try {
      const canProceed = this.rateLimiter.checkRateLimit()

      if (!canProceed) {
        await this.rateLimiter.waitForReset()
      }

      const url = this._getUrl(endpoint, params)

      this.logger(`Getting data from '${url}'`)

      const response = await this.fetchCookie(url, {
        cache: "no-cache",
        credentials: "include",
      })
      this.rateLimiter.updateRateLimit(response)

      const data = await response.json()

      if (!data || response.status !== 200) {
        throw new IracingDataApiException(response.status, url, data)
      }

      return (await this._getLinkData(data.link)) as Data
    } catch (error) {
      this.logger(`Error getting data from '${endpoint}'`)
      return undefined
    }
  }

  _getLinkData = async (link: string) => {
    const response = await fetch(link)
    const data = await response.json()

    if (!data || response.status !== 200) {
      throw new IracingDataApiException(response.status, link, data)
    }

    if (data["chunk_info"]) {
      data.data = await this._getChunks(data["chunk_info"])
    }

    return camelizeKeys(data)
  }

  _getUrl = <Parameters = Record<string, unknown>>(
    endpoint: string,
    params?: Parameters
  ) => {
    const searchParams =
      params && new URLSearchParams(decamelizeKeys(params)).toString()

    return `${API_URL}${endpoint}${searchParams ? `?${searchParams}` : ""}`
  }

  _getChunks = async (chunks: Record<string, any>) => {
    const baseUrl = chunks["base_download_url"]
    const urls = chunks["chunk_file_names"].map(
      (chunkFileName: string) => `${baseUrl}${chunkFileName}`
    )

    const listOfChunks = await Promise.all(
      urls.map(async (url: string) => {
        const response = await fetch(url)
        return response.json()
      })
    )

    return listOfChunks.flat()
  }
}
