export type MemberAwardsParams = {
  custId?: number
}

export type MemberChartDataParams = {
  custId?: number
  categoryId: number
  chartType: number
}

export type MemberGetParams = {
  custIds: number[]
  includeLicenses?: boolean
}

export type MemberProfileParams = {
  custId?: number
}
