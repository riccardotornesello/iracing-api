import { API } from "./api"
import {
  ResultsGetParams,
  ResultsEventLogParams,
  ResultsLapChartDataParams,
  ResultsLapDataParams,
  ResultsSearchHostedParams,
  ResultsSearchSeriesParams,
  ResultsSeasonResultsParams,
} from "./types/results"

export class ResultsAPI extends API {
  /**
   * Get the results of a subsession, if authorized to view them.
   * series_logo image paths are relative to https://images-static.iracing.com/img/logos/series/.
   * @param {ResultsGetParams} params - The params required by the API.
   * @param {number} params.subsessionId
   * @param {boolean} [params.includeLicenses]
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  get = (params: ResultsGetParams) =>
    this._getData<any>("data/results/get", params)

  /**
   * @param {ResultsEventLogParams} params - The params required by the API.
   * @param {number} params.subsessionId
   * @param {number} params.simsessionNumber - The main event is 0; the preceding event is -1, and so on.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  eventLog = (params: ResultsEventLogParams) =>
    this._getData<any>("data/results/event_log", params)

  /**
   * @param {ResultsLapChartDataParams} params - The params required by the API.
   * @param {number} params.subsessionId
   * @param {number} params.simsessionNumber - The main event is 0; the preceding event is -1, and so on.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  lapChartData = (params: ResultsLapChartDataParams) =>
    this._getData<any>("data/results/lap_chart_data", params)

  /**
   * @param {ResultsLapDataParams} params - The params required by the API.
   * @param {number} params.subsessionId
   * @param {number} params.simsessionNumber - The main event is 0; the preceding event is -1, and so on.
   * @param {number} [params.custId] - Required if the subsession was a single-driver event. Optional for team events. If omitted for a team event then the laps driven by all the team's drivers will be included.
   * @param {number} [params.teamId] - Required if the subsession was a team event.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  lapData = (params: ResultsLapDataParams) =>
    this._getData<any>("data/results/lap_data", params)

  /**
   * Hosted and league sessions.
   * Maximum time frame of 90 days.
   * Results split into one or more files with chunks of results.
   * For scraping results the most effective approach is to keep track of the maximum end_time found during a search then make the subsequent call using that date/time as the finish_range_begin and skip any subsessions that are duplicated.
   * Results are ordered by subsessionid which is a proxy for start time.
   * Requires one of: start_range_begin, finish_range_begin.
   * Requires one of: cust_id, team_id, host_cust_id, session_name.
   * @param {ResultsSearchHostedParams} params - The params required by the API.
   * @param {string} [params.startRangeBegin] - Session start times. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z".
   * @param {string} [params.startRangeEnd] - ISO-8601 UTC time zero offset: "2022-04-01T15:45Z". Exclusive. May be omitted if start_range_begin is less than 90 days in the past.
   * @param {string} [params.finishRangeBegin] - Session finish times. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z".
   * @param {string} [params.finishRangeEnd] - ISO-8601 UTC time zero offset: "2022-04-01T15:45Z". Exclusive. May be omitted if finish_range_begin is less than 90 days in the past.
   * @param {number} [params.custId] - The participant's customer ID. Ignored if team_id is supplied.
   * @param {number} [params.teamId] - The team ID to search for. Takes priority over cust_id if both are supplied.
   * @param {number} [params.hostCustId] - The host's customer ID.
   * @param {string} [params.sessionName] - Part or all of the session's name.
   * @param {number} [params.leagueId] - Include only results for the league with this ID.
   * @param {number} [params.leagueSeasonId] - Include only results for the league season with this ID.
   * @param {number} [params.carId] - One of the cars used by the session.
   * @param {number} [params.trackId] - The ID of the track used by the session.
   * @param {number[]} [params.categoryIds] - Track categories to include in the search.  Defaults to all. ?category_ids=1,2,3,4
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  searchHosted = (params: ResultsSearchHostedParams) =>
    this._getData<any>("data/results/search_hosted", params)

  /**
   * Official series.
   * Maximum time frame of 90 days.
   * Results split into one or more files with chunks of results.
   * For scraping results the most effective approach is to keep track of the maximum end_time found during a search then make the subsequent call using that date/time as the finish_range_begin and skip any subsessions that are duplicated.
   * Results are ordered by subsessionid which is a proxy for start time but groups together multiple splits of a series when multiple series launch sessions at the same time.
   * Requires at least one of: season_year and season_quarter, start_range_begin, finish_range_begin.
   * @param {ResultsSearchSeriesParams} params - The params required by the API.
   * @param {number} [params.seasonYear] - Required when using season_quarter.
   * @param {number} [params.seasonQuarter] - Required when using season_year.
   * @param {string} [params.startRangeBegin] - Session start times. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z".
   * @param {string} [params.startRangeEnd] - ISO-8601 UTC time zero offset: "2022-04-01T15:45Z". Exclusive. May be omitted if start_range_begin is less than 90 days in the past.
   * @param {string} [params.finishRangeBegin] - Session finish times. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z".
   * @param {string} [params.finishRangeEnd] - ISO-8601 UTC time zero offset: "2022-04-01T15:45Z". Exclusive. May be omitted if finish_range_begin is less than 90 days in the past.
   * @param {number} [params.custId] - Include only sessions in which this customer participated. Ignored if team_id is supplied.
   * @param {number} [params.teamId] - Include only sessions in which this team participated. Takes priority over cust_id if both are supplied.
   * @param {number} [params.seriesId] - Include only sessions for series with this ID.
   * @param {number} [params.raceWeekNum] - Include only sessions with this race week number.
   * @param {boolean} [params.officialOnly] - If true, include only sessions earning championship points. Defaults to all.
   * @param {number[]} [params.eventTypes] - Types of events to include in the search. Defaults to all. ?event_types=2,3,4,5
   * @param {number[]} [params.categoryIds] - License categories to include in the search.  Defaults to all. ?category_ids=1,2,3,4
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  searchSeries = (params: ResultsSearchSeriesParams) =>
    this._getData<any>("data/results/search_series", params)

  /**
   * @param {ResultsSeasonResultsParams} params - The params required by the API.
   * @param {number} params.seasonId
   * @param {number} [params.eventType] - Retrict to one event type: 2 - Practice; 3 - Qualify; 4 - Time Trial; 5 - Race
   * @param {number} [params.raceWeekNum] - The first race week of a season is 0.
   * @returns {Promise<any>}
   * @throws {Error} - Throws an exception if the API call fails.
   */
  seasonResults = (params: ResultsSeasonResultsParams) =>
    this._getData<any>("data/results/season_results", params)
}
