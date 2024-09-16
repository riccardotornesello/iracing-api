import { API } from "./api"
import { TeamGetParams } from "./types/team"

export class TeamAPI extends API {
  /**
   * @param {TeamGetParams} params - The params required by the API.
   * @param {number} params.teamId
   * @param {boolean} [params.includeLicenses] - For faster responses, only request when necessary.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  get = (params: TeamGetParams) => this._getData<any>("data/team/get", params)
}
