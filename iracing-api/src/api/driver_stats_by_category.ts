import { API } from "./api"

export class DriverStatsByCategoryAPI extends API {
  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  oval = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/driver_stats_by_category/oval"
    )

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  sportsCar = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/driver_stats_by_category/sports_car"
    )

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  formulaCar = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/driver_stats_by_category/formula_car"
    )

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  road = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/driver_stats_by_category/road"
    )

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  dirtOval = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/driver_stats_by_category/dirt_oval"
    )

  /**
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  dirtRoad = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/driver_stats_by_category/dirt_road"
    )
}
