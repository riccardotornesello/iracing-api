# iRacing data API

## Installation

```bash
npm install iracing-data-api
yarn add iracing-data-api
pnpm i iracing-data-api
bun i iracing-data-api
```

## Basic Usage

```typescript
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

More information can be found in the package's [documentation](iracing-data-api/README.md).

## Project status

This project is actively used but since iRacing's API are not frequently updated, it will not receive many updates.
