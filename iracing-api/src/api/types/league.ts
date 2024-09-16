export type LeagueCustLeagueSessionsParams = {
  mine?: boolean
  packageId?: number
}

export type LeagueDirectoryParams = {
  search?: string
  tag?: string
  restrictToMember?: boolean
  restrictToRecruiting?: boolean
  restrictToFriends?: boolean
  restrictToWatched?: boolean
  minimumRosterCount?: number
  maximumRosterCount?: number
  lowerbound?: number
  upperbound?: number
  sort?: string
  order?: string
}

export type LeagueGetParams = {
  leagueId: number
  includeLicenses?: boolean
}

export type LeagueGetPointsSystemsParams = {
  leagueId: number
  seasonId?: number
}

export type LeagueMembershipParams = {
  custId?: number
  includeLeague?: boolean
}

export type LeagueRosterParams = {
  leagueId: number
  includeLicenses?: boolean
}

export type LeagueSeasonsParams = {
  leagueId: number
  retired?: boolean
}

export type LeagueSeasonStandingsParams = {
  leagueId: number
  seasonId: number
  carClassId?: number
  carId?: number
}

export type LeagueSeasonSessionsParams = {
  leagueId: number
  seasonId: number
  resultsOnly?: boolean
}
