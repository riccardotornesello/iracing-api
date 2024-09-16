# League API

All methods in the `League` API are available through the `league` property of the `iRacingAPI` instance.

## custLeagueSessions

```ts
const data = await ir.league.custLeagueSessions(params)
```

Available parameters:

- **mine** - boolean - If true, return only sessions created by this user.
- **packageId** - number - If set, return only sessions using this car or track package ID.

<sub>https://members-ng.iracing.com/data/league/cust_league_sessions</sub>

## directory

```ts
const data = await ir.league.directory(params)
```

Available parameters:

- **search** - string - Will search against league name, description, owner, and league ID.
- **tag** - string - One or more tags, comma-separated.
- **restrictToMember** - boolean - If true include only leagues for which customer is a member.
- **restrictToRecruiting** - boolean - If true include only leagues which are recruiting.
- **restrictToFriends** - boolean - If true include only leagues owned by a friend.
- **restrictToWatched** - boolean - If true include only leagues owned by a watched member.
- **minimumRosterCount** - number - If set include leagues with at least this number of members.
- **maximumRosterCount** - number - If set include leagues with no more than this number of members.
- **lowerbound** - number - First row of results to return. Defaults to 1.
- **upperbound** - number - Last row of results to return. Defaults to lowerbound + 39.
- **sort** - string - One of relevance, leaguename, displayname, rostercount. displayname is owners's name. Defaults to relevance.
- **order** - string - One of asc or desc. Defaults to asc.

<sub>https://members-ng.iracing.com/data/league/directory</sub>

## get

```ts
const data = await ir.league.get(params)
```

Available parameters:

- **leagueId** - number (required)
- **includeLicenses** - boolean - For faster responses, only request when necessary.

<sub>https://members-ng.iracing.com/data/league/get</sub>

## getPointsSystems

```ts
const data = await ir.league.getPointsSystems(params)
```

Available parameters:

- **leagueId** - number (required)
- **seasonId** - number - If included and the season is using custom points (points_system_id:2) then the custom points option is included in the returned list. Otherwise the custom points option is not returned.

<sub>https://members-ng.iracing.com/data/league/get_points_systems</sub>

## membership

```ts
const data = await ir.league.membership(params)
```

Available parameters:

- **custId** - number - If different from the authenticated member, the following resrictions apply: - Caller cannot be on requested customer's block list or an empty list will result; - Requested customer cannot have their online activity prefrence set to hidden or an empty list will result; - Only leagues for which the requested customer is an admin and the league roster is not private are returned.
- **includeLeague** - boolean

<sub>https://members-ng.iracing.com/data/league/membership</sub>

## roster

```ts
const data = await ir.league.roster(params)
```

Available parameters:

- **leagueId** - number (required)
- **includeLicenses** - boolean - For faster responses, only request when necessary.

<sub>https://members-ng.iracing.com/data/league/roster</sub>

## seasons

```ts
const data = await ir.league.seasons(params)
```

Available parameters:

- **leagueId** - number (required)
- **retired** - boolean - If true include seasons which are no longer active.

<sub>https://members-ng.iracing.com/data/league/seasons</sub>

## seasonStandings

```ts
const data = await ir.league.seasonStandings(params)
```

Available parameters:

- **leagueId** - number (required)
- **seasonId** - number (required)
- **carClassId** - number
- **carId** - number - If car_class_id is included then the standings are for the car in that car class, otherwise they are for the car across car classes.

<sub>https://members-ng.iracing.com/data/league/season_standings</sub>

## seasonSessions

```ts
const data = await ir.league.seasonSessions(params)
```

Available parameters:

- **leagueId** - number (required)
- **seasonId** - number (required)
- **resultsOnly** - boolean - If true include only sessions for which results are available.

<sub>https://members-ng.iracing.com/data/league/season_sessions</sub>
