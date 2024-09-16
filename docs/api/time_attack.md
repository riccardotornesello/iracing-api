# TimeAttack API

All methods in the `TimeAttack` API are available through the `timeAttack` property of the `iRacingAPI` instance.

## memberSeasonResults

Results for the authenticated member, if any.

```ts
const data = await ir.timeAttack.memberSeasonResults(params)
```

Available parameters:

- **taCompSeasonId** - number (required)

<sub>https://members-ng.iracing.com/data/time_attack/member_season_results</sub>
