export type Options = {
  logger?: boolean
  manageRateLimit?: boolean
  rateLimitPadding?: number
}

export type FetchCookie = {
  (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>
}
