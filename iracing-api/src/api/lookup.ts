import { API } from "./api"
import { LookupClubHistoryParams, LookupDriversParams } from "./types/lookup"

export class LookupAPI extends API {
  /**
   * Returns an earlier history if requested quarter does not have a club history.
   * @param {LookupClubHistoryParams} params - The params required by the API.
   * @param {number} params.seasonYear
   * @param {number} params.seasonQuarter
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  clubHistory = (params: LookupClubHistoryParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/lookup/club_history",
      params
    )

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  countries = () =>
    this._getData<any>("https://members-ng.iracing.com/data/lookup/countries")

  /**
   * @param {LookupDriversParams} params - The params required by the API.
   * @param {string} params.searchTerm - A cust_id or partial name for which to search.
   * @param {number} [params.leagueId] - Narrow the search to the roster of the given league.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  drivers = (params: LookupDriversParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/lookup/drivers",
      params
    )

  /**
   * ?weather=weather_wind_speed_units&weather=weather_wind_speed_max&weather=weather_wind_speed_min&licenselevels=licenselevels.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  get = () =>
    this._getData<any>("https://members-ng.iracing.com/data/lookup/get")

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  licenses = () =>
    this._getData<any>("https://members-ng.iracing.com/data/lookup/licenses")
}
