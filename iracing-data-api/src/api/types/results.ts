export type ResultsGetParams = {
  subsessionId: number
  includeLicenses?: boolean
}

export type ResultsEventLogParams = {
  subsessionId: number
  simsessionNumber: number
}

export type ResultsLapChartDataParams = {
  subsessionId: number
  simsessionNumber: number
}

export type ResultsLapDataParams = {
  subsessionId: number
  simsessionNumber: number
  custId?: number
  teamId?: number
}

export type ResultsSearchHostedParams = {
  startRangeBegin?: string
  startRangeEnd?: string
  finishRangeBegin?: string
  finishRangeEnd?: string
  custId?: number
  teamId?: number
  hostCustId?: number
  sessionName?: string
  leagueId?: number
  leagueSeasonId?: number
  carId?: number
  trackId?: number
  categoryIds?: number[]
}

export type ResultsSearchSeriesParams = {
  seasonYear?: number
  seasonQuarter?: number
  startRangeBegin?: string
  startRangeEnd?: string
  finishRangeBegin?: string
  finishRangeEnd?: string
  custId?: number
  teamId?: number
  seriesId?: number
  raceWeekNum?: number
  officialOnly?: boolean
  eventTypes?: number[]
  categoryIds?: number[]
}

export type ResultsSeasonResultsParams = {
  seasonId: number
  eventType?: number
  raceWeekNum?: number
}
