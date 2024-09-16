import { DEFAULT_OPTIONS } from "./consts"
import { createLogger } from "./logger"
import { Options } from "./types"

export interface RateLimit {
  limit: number
  remaining: number
  reset: Date
}

export class RateLimiter {
  isActive: boolean
  rateLimit: RateLimit | undefined
  limitPadding: number
  logger: (...args: unknown[]) => void

  constructor(options: Options) {
    this.logger = createLogger(options)

    if (options.manageRateLimit) {
      this.isActive = true
      this.limitPadding =
        options.rateLimitPadding ?? DEFAULT_OPTIONS.rateLimitPadding
    } else {
      this.isActive = false
      this.limitPadding = 0
    }
  }

  updateRateLimit = (response: Response) => {
    if (!this.isActive) return

    this.rateLimit = this._getRateLimit(response)
  }

  checkRateLimit = (): boolean => {
    if (!this.isActive) return true
    if (!this.rateLimit) return true
    if (this.rateLimit.remaining > this.limitPadding) return true
    if (this.rateLimit.reset < new Date()) {
      this.rateLimit = undefined
      return true
    }

    return false
  }

  waitForReset = async () => {
    if (!this.isActive || !this.rateLimit) return

    const timeToReset =
      this.rateLimit.reset.getTime() - new Date().getTime() + 1000

    this.logger(
      `Rate limit exceeded. Waiting for reset at ${this.rateLimit.reset.toLocaleString()}...`
    )

    await new Promise((resolve) => setTimeout(resolve, timeToReset))
  }

  _getRateLimit = (response: Response): RateLimit => {
    const limit = +response.headers.get("x-ratelimit-limit")! ?? 0
    const remaining = +response.headers.get("x-ratelimit-remaining")! ?? 0
    const reset = new Date(
      (+response.headers.get("x-ratelimit-reset")! ?? 0) * 1000
    )

    return { limit, remaining, reset }
  }
}
