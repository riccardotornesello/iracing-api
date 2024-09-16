import { API } from "./api"

export class TrackAPI extends API {
  /**
   * image paths are relative to https://images-static.iracing.com/.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  assets = () =>
    this._getData<any>("https://members-ng.iracing.com/data/track/assets")

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  get = () =>
    this._getData<any>("https://members-ng.iracing.com/data/track/get")
}
