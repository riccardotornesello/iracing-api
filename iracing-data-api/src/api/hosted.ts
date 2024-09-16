import { API } from "./api"
import { HostedCombinedSessionsParams } from "./types/hosted"

export class HostedAPI extends API {
  /**
   * Sessions that can be joined as a driver or spectator, and also includes non-league pending sessions for the user.
   * @param {HostedCombinedSessionsParams} params - The params required by the API.
   * @param {number} [params.packageId] - If set, return only sessions using this car or track package ID.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  combinedSessions = (params: HostedCombinedSessionsParams) =>
    this._getData<any>("data/hosted/combined_sessions", params)

  /**
   * Sessions that can be joined as a driver.
   * Without spectator and non-league pending sessions for the user.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  sessions = () => this._getData<any>("data/hosted/sessions")
}
