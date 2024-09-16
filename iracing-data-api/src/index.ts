import makeFetchCookie from "fetch-cookie"

import { API_URL, DEFAULT_OPTIONS } from "./consts"
import { encryptPassword } from "./helpers"
import { createLogger } from "./logger"
import { RateLimiter } from "./rate-limiter"
import type { FetchCookie, Options } from "./types"

import { CarAPI } from "./api/car"
import { CarclassAPI } from "./api/carclass"
import { ConstantsAPI } from "./api/constants"
import { DriverStatsByCategoryAPI } from "./api/driver_stats_by_category"
import { HostedAPI } from "./api/hosted"
import { LeagueAPI } from "./api/league"
import { LookupAPI } from "./api/lookup"
import { MemberAPI } from "./api/member"
import { ResultsAPI } from "./api/results"
import { SeasonAPI } from "./api/season"
import { SeriesAPI } from "./api/series"
import { StatsAPI } from "./api/stats"
import { TeamAPI } from "./api/team"
import { TimeAttackAPI } from "./api/time_attack"
import { TrackAPI } from "./api/track"

export * from "./types"
export * from "./api/types"
export * from "./consts"
export * from "./exceptions"

export default class IracingAPI {
  //
  fetchCookie: FetchCookie
  options: Options
  rateLimiter: RateLimiter
  logger: (...args: unknown[]) => void

  // API
  car: CarAPI
  carclass: CarclassAPI
  constants: ConstantsAPI
  driverStatsByCategory: DriverStatsByCategoryAPI
  hosted: HostedAPI
  league: LeagueAPI
  lookup: LookupAPI
  member: MemberAPI
  results: ResultsAPI
  season: SeasonAPI
  series: SeriesAPI
  stats: StatsAPI
  team: TeamAPI
  timeAttack: TimeAttackAPI
  track: TrackAPI

  /**
   *
   * @param {Options} [options]
   * @param {boolean} [options.throttleToRateLimit] - If true, will throttle requests to the rate limit.
   */
  constructor(options?: Options) {
    this.fetchCookie = makeFetchCookie(fetch)
    this.options = options ?? DEFAULT_OPTIONS
    this.rateLimiter = new RateLimiter(this.options)

    this.car = new CarAPI(this.fetchCookie, this.options, this.rateLimiter)
    this.carclass = new CarclassAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.constants = new ConstantsAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.driverStatsByCategory = new DriverStatsByCategoryAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.hosted = new HostedAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.league = new LeagueAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.lookup = new LookupAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.member = new MemberAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.results = new ResultsAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.season = new SeasonAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.series = new SeriesAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.stats = new StatsAPI(this.fetchCookie, this.options, this.rateLimiter)
    this.team = new TeamAPI(this.fetchCookie, this.options, this.rateLimiter)
    this.timeAttack = new TimeAttackAPI(
      this.fetchCookie,
      this.options,
      this.rateLimiter
    )
    this.track = new TrackAPI(this.fetchCookie, this.options, this.rateLimiter)

    this.logger = createLogger(this.options)
  }

  /**
   *
   * @param email - iRacing account email
   * @param password - iRacing account password
   *
   * @returns
   */
  login = async (email: string, password: string) => {
    const hashPassword = encryptPassword(email, password)

    const response = await this.fetchCookie(`${API_URL}auth`, {
      body: JSON.stringify({ email, password: hashPassword }),
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    if (response.status !== 200) {
      this.logger("Login failed...")
      return {
        error: response.statusText ?? "Failed to login to iracing-api",
      }
    }

    this.logger("Login successful...")

    return await response.json()
  }
}
