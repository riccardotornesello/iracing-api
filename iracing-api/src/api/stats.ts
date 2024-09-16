import { API } from "./api"
import {
  StatsMemberBestsParams,
  StatsMemberCareerParams,
  StatsMemberDivisionParams,
  StatsMemberRecapParams,
  StatsMemberRecentRacesParams,
  StatsMemberSummaryParams,
  StatsMemberYearlyParams,
  StatsSeasonDriverStandingsParams,
  StatsSeasonSupersessionStandingsParams,
  StatsSeasonTeamStandingsParams,
  StatsSeasonTtStandingsParams,
  StatsSeasonTtResultsParams,
  StatsSeasonQualifyResultsParams,
  StatsWorldRecordsParams,
} from "./types/stats"

export class StatsAPI extends API {
  /**
   * @param {StatsMemberBestsParams} params - The params required by the API.
   * @param {number} [params.custId] - Defaults to the authenticated member.
   * @param {number} [params.carId] - First call should exclude car_id; use cars_driven list in return for subsequent calls.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  memberBests = (params: StatsMemberBestsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/member_bests",
      params
    )

  /**
   * @param {StatsMemberCareerParams} params - The params required by the API.
   * @param {number} [params.custId] - Defaults to the authenticated member.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  memberCareer = (params: StatsMemberCareerParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/member_career",
      params
    )

  /**
   * Divisions are 0-based: 0 is Division 1, 10 is Rookie.
   * See /data/constants/divisons for more information.
   * Always for the authenticated member.
   * @param {StatsMemberDivisionParams} params - The params required by the API.
   * @param {number} params.seasonId
   * @param {number} params.eventType - The event type code for the division type: 4 - Time Trial; 5 - Race
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  memberDivision = (params: StatsMemberDivisionParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/member_division",
      params
    )

  /**
   * @param {StatsMemberRecapParams} params - The params required by the API.
   * @param {number} [params.custId] - Defaults to the authenticated member.
   * @param {number} [params.year] - Season year; if not supplied the current calendar year (UTC) is used.
   * @param {number} [params.season] - Season (quarter) within the year; if not supplied the recap will be fore the entire year.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  memberRecap = (params: StatsMemberRecapParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/member_recap",
      params
    )

  /**
   * @param {StatsMemberRecentRacesParams} params - The params required by the API.
   * @param {number} [params.custId] - Defaults to the authenticated member.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  memberRecentRaces = (params: StatsMemberRecentRacesParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/member_recent_races",
      params
    )

  /**
   * @param {StatsMemberSummaryParams} params - The params required by the API.
   * @param {number} [params.custId] - Defaults to the authenticated member.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  memberSummary = (params: StatsMemberSummaryParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/member_summary",
      params
    )

  /**
   * @param {StatsMemberYearlyParams} params - The params required by the API.
   * @param {number} [params.custId] - Defaults to the authenticated member.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  memberYearly = (params: StatsMemberYearlyParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/member_yearly",
      params
    )

  /**
   * @param {StatsSeasonDriverStandingsParams} params - The params required by the API.
   * @param {number} params.seasonId
   * @param {number} params.carClassId
   * @param {number} [params.clubId] - Defaults to all (-1).
   * @param {number} [params.division] - Divisions are 0-based: 0 is Division 1, 10 is Rookie. See /data/constants/divisons for more information. Defaults to all.
   * @param {number} [params.raceWeekNum] - The first race week of a season is 0.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasonDriverStandings = (params: StatsSeasonDriverStandingsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/season_driver_standings",
      params
    )

  /**
   * @param {StatsSeasonSupersessionStandingsParams} params - The params required by the API.
   * @param {number} params.seasonId
   * @param {number} params.carClassId
   * @param {number} [params.clubId] - Defaults to all (-1).
   * @param {number} [params.division] - Divisions are 0-based: 0 is Division 1, 10 is Rookie. See /data/constants/divisons for more information. Defaults to all.
   * @param {number} [params.raceWeekNum] - The first race week of a season is 0.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasonSupersessionStandings = (
    params: StatsSeasonSupersessionStandingsParams
  ) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/season_supersession_standings",
      params
    )

  /**
   * @param {StatsSeasonTeamStandingsParams} params - The params required by the API.
   * @param {number} params.seasonId
   * @param {number} params.carClassId
   * @param {number} [params.raceWeekNum] - The first race week of a season is 0.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasonTeamStandings = (params: StatsSeasonTeamStandingsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/season_team_standings",
      params
    )

  /**
   * @param {StatsSeasonTtStandingsParams} params - The params required by the API.
   * @param {number} params.seasonId
   * @param {number} params.carClassId
   * @param {number} [params.clubId] - Defaults to all (-1).
   * @param {number} [params.division] - Divisions are 0-based: 0 is Division 1, 10 is Rookie. See /data/constants/divisons for more information. Defaults to all.
   * @param {number} [params.raceWeekNum] - The first race week of a season is 0.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasonTtStandings = (params: StatsSeasonTtStandingsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/season_tt_standings",
      params
    )

  /**
   * @param {StatsSeasonTtResultsParams} params - The params required by the API.
   * @param {number} params.seasonId
   * @param {number} params.carClassId
   * @param {number} params.raceWeekNum - The first race week of a season is 0.
   * @param {number} [params.clubId] - Defaults to all (-1).
   * @param {number} [params.division] - Divisions are 0-based: 0 is Division 1, 10 is Rookie. See /data/constants/divisons for more information. Defaults to all.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasonTtResults = (params: StatsSeasonTtResultsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/season_tt_results",
      params
    )

  /**
   * @param {StatsSeasonQualifyResultsParams} params - The params required by the API.
   * @param {number} params.seasonId
   * @param {number} params.carClassId
   * @param {number} params.raceWeekNum - The first race week of a season is 0.
   * @param {number} [params.clubId] - Defaults to all (-1).
   * @param {number} [params.division] - Divisions are 0-based: 0 is Division 1, 10 is Rookie. See /data/constants/divisons for more information. Defaults to all.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasonQualifyResults = (params: StatsSeasonQualifyResultsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/season_qualify_results",
      params
    )

  /**
   * @param {StatsWorldRecordsParams} params - The params required by the API.
   * @param {number} params.carId
   * @param {number} params.trackId
   * @param {number} [params.seasonYear] - Limit best times to a given year.
   * @param {number} [params.seasonQuarter] - Limit best times to a given quarter; only applicable when year is used.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  worldRecords = (params: StatsWorldRecordsParams) =>
    this._getData<any>(
      "https://members-ng.iracing.com/data/stats/world_records",
      params
    )
}
