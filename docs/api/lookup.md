# Lookup API

All methods in the `Lookup` API are available through the `lookup` property of the `iRacingAPI` instance.

## clubHistory

Returns an earlier history if requested quarter does not have a club history.

```ts
const data = await ir.lookup.clubHistory(params)
```

Available parameters:

- **seasonYear** - number (required)
- **seasonQuarter** - number (required)

<sub>https://members-ng.iracing.com/data/lookup/club_history</sub>

## countries

```ts
const data = await ir.lookup.countries()
```

<sub>https://members-ng.iracing.com/data/lookup/countries</sub>

## drivers

```ts
const data = await ir.lookup.drivers(params)
```

Available parameters:

- **searchTerm** - string (required) - A cust_id or partial name for which to search.
- **leagueId** - number - Narrow the search to the roster of the given league.

<sub>https://members-ng.iracing.com/data/lookup/drivers</sub>

## get

?weather=weather_wind_speed_units&weather=weather_wind_speed_max&weather=weather_wind_speed_min&licenselevels=licenselevels.

```ts
const data = await ir.lookup.get()
```

<sub>https://members-ng.iracing.com/data/lookup/get</sub>

## licenses

```ts
const data = await ir.lookup.licenses()
```

<sub>https://members-ng.iracing.com/data/lookup/licenses</sub>
