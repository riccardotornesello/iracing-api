# Getting Started

## Installation

Add **iracing-data-api** to your project by running the following command:

::: code-group

```sh [npm]
$ npm add iracing-data-api
```

```sh [pnpm]
$ pnpm add iracing-data-api
```

```sh [yarn]
$ yarn add iracing-data-api
```

```sh [bun]
$ bun add iracing-data-api
```

:::

## Basic usage

To use the iRacing API, you have to log in first, and then you can request data. Here is a basic example:

```ts
import IracingAPI from "iracing-data-api"

const irUser = "FOO@gmail.com"
const irPass = "BAR"

const main = async () => {
  const ir = new IracingAPI()

  // First you have to login to iracing using your credentials to be able to use the API.
  await ir.login(irUser, irPass)

  // Now you can use any endpoint, e.g. getCars
  const cars = await ir.car.getCars()

  console.log(cars)
}

main().then(() => "Done")
```

## API Client

```ts
import { iRacingAPI } from "iracing-data-api"

const ir = new iRacingAPI(options)
```

### Options

- logger: `boolean` - Enable logging of requests and responses. Default is `false`.
- manageRateLimits: `boolean` - Enable rate limit management. Default is `false`.
- rateLimitPadding: `number` - Add a padding to the rate limit to avoid hitting the limit. Default is `5`.

### Login

```ts
const email = "email@domain.com"
const password = "password"

await ir.login(email, password)
```
