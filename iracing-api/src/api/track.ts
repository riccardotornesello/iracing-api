import { API } from "./api"

export class TrackAPI extends API {
  /**
   * image paths are relative to https://images-static.iracing.com/.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  assets = () => this._getData<any>("data/track/assets")

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  get = () => this._getData<any>("data/track/get")
}
