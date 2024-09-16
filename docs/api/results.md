# Results API

All methods in the `Results` API are available through the `results` property of the `iRacingAPI` instance.

## get

Get the results of a subsession, if authorized to view them.
series_logo image paths are relative to https://images-static.iracing.com/img/logos/series/.

```ts
const data = await ir.results.get(params)
```

Available parameters:

- **subsessionId** - number (required)
- **includeLicenses** - boolean

<sub>https://members-ng.iracing.com/data/results/get</sub>

## eventLog

```ts
const data = await ir.results.eventLog(params)
```

Available parameters:

- **subsessionId** - number (required)
- **simsessionNumber** - number (required) - The main event is 0; the preceding event is -1, and so on.

<sub>https://members-ng.iracing.com/data/results/event_log</sub>

## lapChartData

```ts
const data = await ir.results.lapChartData(params)
```

Available parameters:

- **subsessionId** - number (required)
- **simsessionNumber** - number (required) - The main event is 0; the preceding event is -1, and so on.

<sub>https://members-ng.iracing.com/data/results/lap_chart_data</sub>

## lapData

```ts
const data = await ir.results.lapData(params)
```

Available parameters:

- **subsessionId** - number (required)
- **simsessionNumber** - number (required) - The main event is 0; the preceding event is -1, and so on.
- **custId** - number - Required if the subsession was a single-driver event. Optional for team events. If omitted for a team event then the laps driven by all the team's drivers will be included.
- **teamId** - number - Required if the subsession was a team event.

<sub>https://members-ng.iracing.com/data/results/lap_data</sub>

## searchHosted

Hosted and league sessions.
Maximum time frame of 90 days.
Results split into one or more files with chunks of results.
For scraping results the most effective approach is to keep track of the maximum end_time found during a search then make the subsequent call using that date/time as the finish_range_begin and skip any subsessions that are duplicated.
Results are ordered by subsessionid which is a proxy for start time.
Requires one of: start_range_begin, finish_range_begin.
Requires one of: cust_id, team_id, host_cust_id, session_name.

```ts
const data = await ir.results.searchHosted(params)
```

Available parameters:

- **startRangeBegin** - string - Session start times. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z".
- **startRangeEnd** - string - ISO-8601 UTC time zero offset: "2022-04-01T15:45Z". Exclusive. May be omitted if start_range_begin is less than 90 days in the past.
- **finishRangeBegin** - string - Session finish times. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z".
- **finishRangeEnd** - string - ISO-8601 UTC time zero offset: "2022-04-01T15:45Z". Exclusive. May be omitted if finish_range_begin is less than 90 days in the past.
- **custId** - number - The participant's customer ID. Ignored if team_id is supplied.
- **teamId** - number - The team ID to search for. Takes priority over cust_id if both are supplied.
- **hostCustId** - number - The host's customer ID.
- **sessionName** - string - Part or all of the session's name.
- **leagueId** - number - Include only results for the league with this ID.
- **leagueSeasonId** - number - Include only results for the league season with this ID.
- **carId** - number - One of the cars used by the session.
- **trackId** - number - The ID of the track used by the session.
- **categoryIds** - number[] - Track categories to include in the search. Defaults to all. ?category_ids=1,2,3,4

<sub>https://members-ng.iracing.com/data/results/search_hosted</sub>

## searchSeries

Official series.
Maximum time frame of 90 days.
Results split into one or more files with chunks of results.
For scraping results the most effective approach is to keep track of the maximum end_time found during a search then make the subsequent call using that date/time as the finish_range_begin and skip any subsessions that are duplicated.
Results are ordered by subsessionid which is a proxy for start time but groups together multiple splits of a series when multiple series launch sessions at the same time.
Requires at least one of: season_year and season_quarter, start_range_begin, finish_range_begin.

```ts
const data = await ir.results.searchSeries(params)
```

Available parameters:

- **seasonYear** - number - Required when using season_quarter.
- **seasonQuarter** - number - Required when using season_year.
- **startRangeBegin** - string - Session start times. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z".
- **startRangeEnd** - string - ISO-8601 UTC time zero offset: "2022-04-01T15:45Z". Exclusive. May be omitted if start_range_begin is less than 90 days in the past.
- **finishRangeBegin** - string - Session finish times. ISO-8601 UTC time zero offset: "2022-04-01T15:45Z".
- **finishRangeEnd** - string - ISO-8601 UTC time zero offset: "2022-04-01T15:45Z". Exclusive. May be omitted if finish_range_begin is less than 90 days in the past.
- **custId** - number - Include only sessions in which this customer participated. Ignored if team_id is supplied.
- **teamId** - number - Include only sessions in which this team participated. Takes priority over cust_id if both are supplied.
- **seriesId** - number - Include only sessions for series with this ID.
- **raceWeekNum** - number - Include only sessions with this race week number.
- **officialOnly** - boolean - If true, include only sessions earning championship points. Defaults to all.
- **eventTypes** - number[] - Types of events to include in the search. Defaults to all. ?event_types=2,3,4,5
- **categoryIds** - number[] - License categories to include in the search. Defaults to all. ?category_ids=1,2,3,4

<sub>https://members-ng.iracing.com/data/results/search_series</sub>

## seasonResults

```ts
const data = await ir.results.seasonResults(params)
```

Available parameters:

- **seasonId** - number (required)
- **eventType** - number - Retrict to one event type: 2 - Practice; 3 - Qualify; 4 - Time Trial; 5 - Race
- **raceWeekNum** - number - The first race week of a season is 0.

<sub>https://members-ng.iracing.com/data/results/season_results</sub>
