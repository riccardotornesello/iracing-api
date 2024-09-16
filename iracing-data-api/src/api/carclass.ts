import { API } from "./api"

export class CarclassAPI extends API {
  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  get = () => this._getData<any>("data/carclass/get")
}
