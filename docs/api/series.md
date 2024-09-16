# Series API

All methods in the `Series` API are available through the `series` property of the `iRacingAPI` instance.

## assets

image paths are relative to https://images-static.iracing.com/.

```ts
const data = await ir.series.assets()
```

<sub>https://members-ng.iracing.com/data/series/assets</sub>

## get

```ts
const data = await ir.series.get()
```

<sub>https://members-ng.iracing.com/data/series/get</sub>

## pastSeasons

Get all seasons for a series.
Filter list by official:true for seasons with standings.

```ts
const data = await ir.series.pastSeasons(params)
```

Available parameters:

- **seriesId** - number (required)

<sub>https://members-ng.iracing.com/data/series/past_seasons</sub>

## seasons

```ts
const data = await ir.series.seasons(params)
```

Available parameters:

- **includeSeries** - boolean

<sub>https://members-ng.iracing.com/data/series/seasons</sub>

## statsSeries

To get series and seasons for which standings should be available, filter the list by official: true.

```ts
const data = await ir.series.statsSeries()
```

<sub>https://members-ng.iracing.com/data/series/stats_series</sub>
