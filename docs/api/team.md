# Team API

All methods in the `Team` API are available through the `team` property of the `iRacingAPI` instance.

## get

```ts
const data = await ir.team.get(params)
```

Available parameters:

- **teamId** - number (required)
- **includeLicenses** - boolean - For faster responses, only request when necessary.

<sub>https://members-ng.iracing.com/data/team/get</sub>
