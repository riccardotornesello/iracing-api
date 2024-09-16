import { API } from "./api"

export class CarAPI extends API {
  /**
   * image paths are relative to https://images-static.iracing.com/.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  assets = () => this._getData<any>("data/car/assets")

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  get = () => this._getData<any>("data/car/get")
}
