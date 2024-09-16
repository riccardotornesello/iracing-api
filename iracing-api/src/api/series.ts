import { API } from "./api"
import { SeriesPastSeasonsParams, SeriesSeasonsParams } from "./types/series"

export class SeriesAPI extends API {
  /**
   * image paths are relative to https://images-static.iracing.com/.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  assets = () =>
    this._getData<any>("https://members-ng.iracing.com/data/series/assets")

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  get = () =>
    this._getData<any>("https://members-ng.iracing.com/data/series/get")

  /**
   * Get all seasons for a series.
   * Filter list by official:true for seasons with standings.
   * @param {SeriesPastSeasonsParams} params - The params required by the API.
   * @param {number} params.seriesId
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  pastSeasons = (params: SeriesPastSeasonsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/series/past_seasons",
      params
    )

  /**
   * @param {SeriesSeasonsParams} params - The params required by the API.
   * @param {boolean} [params.includeSeries]
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasons = (params: SeriesSeasonsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/series/seasons",
      params
    )

  /**
   * To get series and seasons for which standings should be available, filter the list by official: true.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  statsSeries = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/series/stats_series"
    )
}
