import { API } from "./api"
import {
  LeagueCustLeagueSessionsParams,
  LeagueDirectoryParams,
  LeagueGetParams,
  LeagueGetPointsSystemsParams,
  LeagueMembershipParams,
  LeagueRosterParams,
  LeagueSeasonsParams,
  LeagueSeasonStandingsParams,
  LeagueSeasonSessionsParams,
} from "./types/league"

export class LeagueAPI extends API {
  /**
   * @param {LeagueCustLeagueSessionsParams} params - The params required by the API.
   * @param {boolean} [params.mine] - If true, return only sessions created by this user.
   * @param {number} [params.packageId] - If set, return only sessions using this car or track package ID.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  custLeagueSessions = (params: LeagueCustLeagueSessionsParams) =>
    this._getData<any>("data/league/cust_league_sessions", params)

  /**
   * @param {LeagueDirectoryParams} params - The params required by the API.
   * @param {string} [params.search] - Will search against league name, description, owner, and league ID.
   * @param {string} [params.tag] - One or more tags, comma-separated.
   * @param {boolean} [params.restrictToMember] - If true include only leagues for which customer is a member.
   * @param {boolean} [params.restrictToRecruiting] - If true include only leagues which are recruiting.
   * @param {boolean} [params.restrictToFriends] - If true include only leagues owned by a friend.
   * @param {boolean} [params.restrictToWatched] - If true include only leagues owned by a watched member.
   * @param {number} [params.minimumRosterCount] - If set include leagues with at least this number of members.
   * @param {number} [params.maximumRosterCount] - If set include leagues with no more than this number of members.
   * @param {number} [params.lowerbound] - First row of results to return.  Defaults to 1.
   * @param {number} [params.upperbound] - Last row of results to return. Defaults to lowerbound + 39.
   * @param {string} [params.sort] - One of relevance, leaguename, displayname, rostercount. displayname is owners's name. Defaults to relevance.
   * @param {string} [params.order] - One of asc or desc.  Defaults to asc.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  directory = (params: LeagueDirectoryParams) =>
    this._getData<any>("data/league/directory", params)

  /**
   * @param {LeagueGetParams} params - The params required by the API.
   * @param {number} params.leagueId
   * @param {boolean} [params.includeLicenses] - For faster responses, only request when necessary.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  get = (params: LeagueGetParams) =>
    this._getData<any>("data/league/get", params)

  /**
   * @param {LeagueGetPointsSystemsParams} params - The params required by the API.
   * @param {number} params.leagueId
   * @param {number} [params.seasonId] - If included and the season is using custom points (points_system_id:2) then the custom points option is included in the returned list. Otherwise the custom points option is not returned.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  getPointsSystems = (params: LeagueGetPointsSystemsParams) =>
    this._getData<any>("data/league/get_points_systems", params)

  /**
   * @param {LeagueMembershipParams} params - The params required by the API.
   * @param {number} [params.custId] - If different from the authenticated member, the following resrictions apply: - Caller cannot be on requested customer's block list or an empty list will result; - Requested customer cannot have their online activity prefrence set to hidden or an empty list will result; - Only leagues for which the requested customer is an admin and the league roster is not private are returned.
   * @param {boolean} [params.includeLeague]
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  membership = (params: LeagueMembershipParams) =>
    this._getData<any>("data/league/membership", params)

  /**
   * @param {LeagueRosterParams} params - The params required by the API.
   * @param {number} params.leagueId
   * @param {boolean} [params.includeLicenses] - For faster responses, only request when necessary.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  roster = (params: LeagueRosterParams) =>
    this._getData<any>("data/league/roster", params)

  /**
   * @param {LeagueSeasonsParams} params - The params required by the API.
   * @param {number} params.leagueId
   * @param {boolean} [params.retired] - If true include seasons which are no longer active.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasons = (params: LeagueSeasonsParams) =>
    this._getData<any>("data/league/seasons", params)

  /**
   * @param {LeagueSeasonStandingsParams} params - The params required by the API.
   * @param {number} params.leagueId
   * @param {number} params.seasonId
   * @param {number} [params.carClassId]
   * @param {number} [params.carId] - If car_class_id is included then the standings are for the car in that car class, otherwise they are for the car across car classes.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasonStandings = (params: LeagueSeasonStandingsParams) =>
    this._getData<any>("data/league/season_standings", params)

  /**
   * @param {LeagueSeasonSessionsParams} params - The params required by the API.
   * @param {number} params.leagueId
   * @param {number} params.seasonId
   * @param {boolean} [params.resultsOnly] - If true include only sessions for which results are available.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasonSessions = (params: LeagueSeasonSessionsParams) =>
    this._getData<any>("data/league/season_sessions", params)
}
