export type SeasonListParams = {
  seasonYear: number
  seasonQuarter: number
}

export type SeasonRaceGuideParams = {
  from?: string
  includeEndAfterFrom?: boolean
}

export type SeasonSpectatorSubsessionidsParams = {
  eventTypes?: number[]
}

export type SeasonSpectatorSubsessionidsDetailParams = {
  eventTypes?: number[]
  seasonIds?: number[]
}
