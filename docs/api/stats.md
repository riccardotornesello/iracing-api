# Stats API

All methods in the `Stats` API are available through the `stats` property of the `iRacingAPI` instance.

## memberBests

```ts
const data = await ir.stats.memberBests(params)
```

Available parameters:

- **custId** - number - Defaults to the authenticated member.
- **carId** - number - First call should exclude car_id; use cars_driven list in return for subsequent calls.

<sub>https://members-ng.iracing.com/data/stats/member_bests</sub>

## memberCareer

```ts
const data = await ir.stats.memberCareer(params)
```

Available parameters:

- **custId** - number - Defaults to the authenticated member.

<sub>https://members-ng.iracing.com/data/stats/member_career</sub>

## memberDivision

Divisions are 0-based: 0 is Division 1, 10 is Rookie.
See /data/constants/divisons for more information.
Always for the authenticated member.

```ts
const data = await ir.stats.memberDivision(params)
```

Available parameters:

- **seasonId** - number (required)
- **eventType** - number (required) - The event type code for the division type: 4 - Time Trial; 5 - Race

<sub>https://members-ng.iracing.com/data/stats/member_division</sub>

## memberRecap

```ts
const data = await ir.stats.memberRecap(params)
```

Available parameters:

- **custId** - number - Defaults to the authenticated member.
- **year** - number - Season year; if not supplied the current calendar year (UTC) is used.
- **season** - number - Season (quarter) within the year; if not supplied the recap will be fore the entire year.

<sub>https://members-ng.iracing.com/data/stats/member_recap</sub>

## memberRecentRaces

```ts
const data = await ir.stats.memberRecentRaces(params)
```

Available parameters:

- **custId** - number - Defaults to the authenticated member.

<sub>https://members-ng.iracing.com/data/stats/member_recent_races</sub>

## memberSummary

```ts
const data = await ir.stats.memberSummary(params)
```

Available parameters:

- **custId** - number - Defaults to the authenticated member.

<sub>https://members-ng.iracing.com/data/stats/member_summary</sub>

## memberYearly

```ts
const data = await ir.stats.memberYearly(params)
```

Available parameters:

- **custId** - number - Defaults to the authenticated member.

<sub>https://members-ng.iracing.com/data/stats/member_yearly</sub>

## seasonDriverStandings

```ts
const data = await ir.stats.seasonDriverStandings(params)
```

Available parameters:

- **seasonId** - number (required)
- **carClassId** - number (required)
- **clubId** - number - Defaults to all (-1).
- **division** - number - Divisions are 0-based: 0 is Division 1, 10 is Rookie. See /data/constants/divisons for more information. Defaults to all.
- **raceWeekNum** - number - The first race week of a season is 0.

<sub>https://members-ng.iracing.com/data/stats/season_driver_standings</sub>

## seasonSupersessionStandings

```ts
const data = await ir.stats.seasonSupersessionStandings(params)
```

Available parameters:

- **seasonId** - number (required)
- **carClassId** - number (required)
- **clubId** - number - Defaults to all (-1).
- **division** - number - Divisions are 0-based: 0 is Division 1, 10 is Rookie. See /data/constants/divisons for more information. Defaults to all.
- **raceWeekNum** - number - The first race week of a season is 0.

<sub>https://members-ng.iracing.com/data/stats/season_supersession_standings</sub>

## seasonTeamStandings

```ts
const data = await ir.stats.seasonTeamStandings(params)
```

Available parameters:

- **seasonId** - number (required)
- **carClassId** - number (required)
- **raceWeekNum** - number - The first race week of a season is 0.

<sub>https://members-ng.iracing.com/data/stats/season_team_standings</sub>

## seasonTtStandings

```ts
const data = await ir.stats.seasonTtStandings(params)
```

Available parameters:

- **seasonId** - number (required)
- **carClassId** - number (required)
- **clubId** - number - Defaults to all (-1).
- **division** - number - Divisions are 0-based: 0 is Division 1, 10 is Rookie. See /data/constants/divisons for more information. Defaults to all.
- **raceWeekNum** - number - The first race week of a season is 0.

<sub>https://members-ng.iracing.com/data/stats/season_tt_standings</sub>

## seasonTtResults

```ts
const data = await ir.stats.seasonTtResults(params)
```

Available parameters:

- **seasonId** - number (required)
- **carClassId** - number (required)
- **raceWeekNum** - number (required) - The first race week of a season is 0.
- **clubId** - number - Defaults to all (-1).
- **division** - number - Divisions are 0-based: 0 is Division 1, 10 is Rookie. See /data/constants/divisons for more information. Defaults to all.

<sub>https://members-ng.iracing.com/data/stats/season_tt_results</sub>

## seasonQualifyResults

```ts
const data = await ir.stats.seasonQualifyResults(params)
```

Available parameters:

- **seasonId** - number (required)
- **carClassId** - number (required)
- **raceWeekNum** - number (required) - The first race week of a season is 0.
- **clubId** - number - Defaults to all (-1).
- **division** - number - Divisions are 0-based: 0 is Division 1, 10 is Rookie. See /data/constants/divisons for more information. Defaults to all.

<sub>https://members-ng.iracing.com/data/stats/season_qualify_results</sub>

## worldRecords

```ts
const data = await ir.stats.worldRecords(params)
```

Available parameters:

- **carId** - number (required)
- **trackId** - number (required)
- **seasonYear** - number - Limit best times to a given year.
- **seasonQuarter** - number - Limit best times to a given quarter; only applicable when year is used.

<sub>https://members-ng.iracing.com/data/stats/world_records</sub>
