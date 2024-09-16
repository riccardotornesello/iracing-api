# Season API

All methods in the `Season` API are available through the `season` property of the `iRacingAPI` instance.

## list

```ts
const data = await ir.season.list(params)
```

Available parameters:

- **seasonYear** - number (required)
- **seasonQuarter** - number (required)

<sub>https://members-ng.iracing.com/data/season/list</sub>

## raceGuide

```ts
const data = await ir.season.raceGuide(params)
```

Available parameters:

- **from** - string - ISO-8601 offset format. Defaults to the current time. Include sessions with start times up to 3 hours after this time. Times in the past will be rewritten to the current time.
- **includeEndAfterFrom** - boolean - Include sessions which start before 'from' but end after.

<sub>https://members-ng.iracing.com/data/season/race_guide</sub>

## spectatorSubsessionids

```ts
const data = await ir.season.spectatorSubsessionids(params)
```

Available parameters:

- **eventTypes** - number[] - Types of events to include in the search. Defaults to all. ?event_types=2,3,4,5

<sub>https://members-ng.iracing.com/data/season/spectator_subsessionids</sub>

## spectatorSubsessionidsDetail

```ts
const data = await ir.season.spectatorSubsessionidsDetail(params)
```

Available parameters:

- **eventTypes** - number[] - Types of events to include in the search. Defaults to all. ?event_types=2,3,4,5
- **seasonIds** - number[] - Seasons to include in the search. Defaults to all. ?season_ids=513,937

<sub>https://members-ng.iracing.com/data/season/spectator_subsessionids_detail</sub>
