import { API } from "./api"
import { TimeAttackMemberSeasonResultsParams } from "./types/time_attack"

export class TimeAttackAPI extends API {
  /**
   * Results for the authenticated member, if any.
   * @param {TimeAttackMemberSeasonResultsParams} params - The params required by the API.
   * @param {number} params.taCompSeasonId
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  memberSeasonResults = (params: TimeAttackMemberSeasonResultsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/time_attack/member_season_results",
      params
    )
}
