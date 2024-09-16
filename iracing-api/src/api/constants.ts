import { API } from "./api"

export class ConstantsAPI extends API {
  /**
   * Constant; returned directly as an array of objects.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  categories = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/constants/categories"
    )

  /**
   * Constant; returned directly as an array of objects.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  divisions = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/constants/divisions"
    )

  /**
   * Constant; returned directly as an array of objects.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  eventTypes = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/constants/event_types"
    )
}
