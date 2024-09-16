import { camelizeKeys, decamelizeKeys } from "humps"

import { API_URL } from "../consts"
import { createLogger } from "../logger"
import { RateLimiter } from "../rate-limiter"
import type { FetchCookie, Options } from "../types"
import { IracingDataApiException } from "../exceptions"

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

      const snakeParams = decamelizeKeys(params)

      const parsedParams = `[${Object.entries(snakeParams ?? {})
        .map(([key, value]) => `${key}=${value}`)
        .join(", ")}]`
      this.logger(`Getting data from '${endpoint}'`, parsedParams)

      const url = this._getUrl(endpoint, snakeParams)
      const response = await this.fetchCookie(url, {
        cache: "no-cache",
        credentials: "include",
      })
      this.rateLimiter.updateRateLimit(response)

      const data = await response.json()

      if (response.status !== 200) {
        throw new IracingDataApiException(response.status, url, data)
      }

      if (data?.link) {
        return await this._getLinkData<Data>(data?.link)
      }

      return data as Data | undefined
    } catch (error) {
      this.logger(`Error getting data from '${endpoint}'`)
      return undefined
    }
  }

  _getLinkData = async <Data>(
    link: string | undefined
  ): Promise<Data | undefined> => {
    if (!link) return undefined

    const response = await fetch(link)
    const data = await response.json()

    if (!data) return undefined

    return camelizeKeys(data) as Data
  }

  _getUrl = <Parameters = Record<string, unknown>>(
    endpoint: string,
    params?: Parameters
  ) => {
    // Filter out empty values
    const searchParams =
      params &&
      new URLSearchParams(JSON.parse(JSON.stringify(params))).toString()

    return `${API_URL}${endpoint}${searchParams ? `?${searchParams}` : ""}`
  }

  _getChunks = async (chunks: Record<string, any>) => {
    if (!chunks) return []

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
