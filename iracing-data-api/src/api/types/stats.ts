export type StatsMemberBestsParams = {
  custId?: number
  carId?: number
}

export type StatsMemberCareerParams = {
  custId?: number
}

export type StatsMemberDivisionParams = {
  seasonId: number
  eventType: number
}

export type StatsMemberRecapParams = {
  custId?: number
  year?: number
  season?: number
}

export type StatsMemberRecentRacesParams = {
  custId?: number
}

export type StatsMemberSummaryParams = {
  custId?: number
}

export type StatsMemberYearlyParams = {
  custId?: number
}

export type StatsSeasonDriverStandingsParams = {
  seasonId: number
  carClassId: number
  clubId?: number
  division?: number
  raceWeekNum?: number
}

export type StatsSeasonSupersessionStandingsParams = {
  seasonId: number
  carClassId: number
  clubId?: number
  division?: number
  raceWeekNum?: number
}

export type StatsSeasonTeamStandingsParams = {
  seasonId: number
  carClassId: number
  raceWeekNum?: number
}

export type StatsSeasonTtStandingsParams = {
  seasonId: number
  carClassId: number
  clubId?: number
  division?: number
  raceWeekNum?: number
}

export type StatsSeasonTtResultsParams = {
  seasonId: number
  carClassId: number
  raceWeekNum: number
  clubId?: number
  division?: number
}

export type StatsSeasonQualifyResultsParams = {
  seasonId: number
  carClassId: number
  raceWeekNum: number
  clubId?: number
  division?: number
}

export type StatsWorldRecordsParams = {
  carId: number
  trackId: number
  seasonYear?: number
  seasonQuarter?: number
}
