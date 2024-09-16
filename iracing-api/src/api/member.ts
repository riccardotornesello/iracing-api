import { API } from "./api"
import {
  MemberAwardsParams,
  MemberChartDataParams,
  MemberGetParams,
  MemberProfileParams,
} from "./types/member"

export class MemberAPI extends API {
  /**
   * @param {MemberAwardsParams} params - The params required by the API.
   * @param {number} [params.custId] - Defaults to the authenticated member.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  awards = (params: MemberAwardsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/member/awards",
      params
    )

  /**
   * @param {MemberChartDataParams} params - The params required by the API.
   * @param {number} [params.custId] - Defaults to the authenticated member.
   * @param {number} params.categoryId - 1 - Oval; 2 - Road; 3 - Dirt oval; 4 - Dirt road
   * @param {number} params.chartType - 1 - iRating; 2 - TT Rating; 3 - License/SR
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  chartData = (params: MemberChartDataParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/member/chart_data",
      params
    )

  /**
   * @param {MemberGetParams} params - The params required by the API.
   * @param {number[]} params.custIds - ?cust_ids=2,3,4
   * @param {boolean} [params.includeLicenses]
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  get = (params: MemberGetParams) =>
    this._getData<any>("https://members-ng.iracing.com/data/member/get", params)

  /**
   * Always the authenticated member.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  info = () =>
    this._getData<any>("https://members-ng.iracing.com/data/member/info")

  /**
   * Always the authenticated member.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  participationCredits = () =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/member/participation_credits"
    )

  /**
   * @param {MemberProfileParams} params - The params required by the API.
   * @param {number} [params.custId] - Defaults to the authenticated member.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  profile = (params: MemberProfileParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/member/profile",
      params
    )
}
