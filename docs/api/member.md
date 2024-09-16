# Member API

All methods in the `Member` API are available through the `member` property of the `iRacingAPI` instance.

## awards

```ts
const data = await ir.member.awards(params)
```

Available parameters:

- **custId** - number - Defaults to the authenticated member.

<sub>https://members-ng.iracing.com/data/member/awards</sub>

## chartData

```ts
const data = await ir.member.chartData(params)
```

Available parameters:

- **custId** - number - Defaults to the authenticated member.
- **categoryId** - number (required) - 1 - Oval; 2 - Road; 3 - Dirt oval; 4 - Dirt road
- **chartType** - number (required) - 1 - iRating; 2 - TT Rating; 3 - License/SR

<sub>https://members-ng.iracing.com/data/member/chart_data</sub>

## get

```ts
const data = await ir.member.get(params)
```

Available parameters:

- **custIds** - number[] (required) - ?cust_ids=2,3,4
- **includeLicenses** - boolean

<sub>https://members-ng.iracing.com/data/member/get</sub>

## info

Always the authenticated member.

```ts
const data = await ir.member.info()
```

<sub>https://members-ng.iracing.com/data/member/info</sub>

## participationCredits

Always the authenticated member.

```ts
const data = await ir.member.participationCredits()
```

<sub>https://members-ng.iracing.com/data/member/participation_credits</sub>

## profile

```ts
const data = await ir.member.profile(params)
```

Available parameters:

- **custId** - number - Defaults to the authenticated member.

<sub>https://members-ng.iracing.com/data/member/profile</sub>
