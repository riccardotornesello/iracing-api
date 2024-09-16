import { Options } from "./types"

// TODO: replace with actual logger
export const createLogger = (options: Options) => {
  if (options.logger) {
    return (...args: unknown[]) =>
      console.log(`\x1b[34m[iracing-api]\x1b[0m`, ...args)
  } else {
    return () => {}
  }
}
