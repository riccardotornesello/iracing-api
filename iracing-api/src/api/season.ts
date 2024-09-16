import { API } from "./api"
import {
  SeasonListParams,
  SeasonRaceGuideParams,
  SeasonSpectatorSubsessionidsParams,
  SeasonSpectatorSubsessionidsDetailParams,
} from "./types/season"

export class SeasonAPI extends API {
  /**
   * @param {SeasonListParams} params - The params required by the API.
   * @param {number} params.seasonYear
   * @param {number} params.seasonQuarter
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  list = (params: SeasonListParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/season/list",
      params
    )

  /**
   * @param {SeasonRaceGuideParams} params - The params required by the API.
   * @param {string} [params.from] - ISO-8601 offset format. Defaults to the current time. Include sessions with start times up to 3 hours after this time. Times in the past will be rewritten to the current time.
   * @param {boolean} [params.includeEndAfterFrom] - Include sessions which start before 'from' but end after.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  raceGuide = (params: SeasonRaceGuideParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/season/race_guide",
      params
    )

  /**
   * @param {SeasonSpectatorSubsessionidsParams} params - The params required by the API.
   * @param {number[]} [params.eventTypes] - Types of events to include in the search. Defaults to all. ?event_types=2,3,4,5
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  spectatorSubsessionids = (params: SeasonSpectatorSubsessionidsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/season/spectator_subsessionids",
      params
    )

  /**
   * @param {SeasonSpectatorSubsessionidsDetailParams} params - The params required by the API.
   * @param {number[]} [params.eventTypes] - Types of events to include in the search. Defaults to all. ?event_types=2,3,4,5
   * @param {number[]} [params.seasonIds] - Seasons to include in the search. Defaults to all. ?season_ids=513,937
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  spectatorSubsessionidsDetail = (
    params: SeasonSpectatorSubsessionidsDetailParams
  ) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/season/spectator_subsessionids_detail",
      params
    )
}
