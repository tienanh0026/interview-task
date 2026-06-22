import { PaginationParams } from "@/lib/api/types";

interface GetTopCoinsQueryParams extends PaginationParams {
  vs_currency: string;
  order: TopCoinsOrderType;
}

type TopCoinsOrderType = (typeof TopCoinsOrder)[keyof typeof TopCoinsOrder];

const TopCoinsOrder = {
  CAP_ASC: "market_cap_asc",
  CAP_DESC: "market_cap_desc",
  VOLUME_ASC: "volume_asc",
  VOLUME_DESC: "volume_desc",
} as const;

const CoinChartInterval = {
  HOURLY: "hourly",
  DAILY: "daily",
} as const;

type CoinChartIntervalType =
  (typeof CoinChartInterval)[keyof typeof CoinChartInterval];

interface GetCoinChartDataQueryParams {
  vs_currency: string;
  days: number;
  interval: CoinChartIntervalType;
}

export type {
  GetTopCoinsQueryParams,
  TopCoinsOrderType,
  GetCoinChartDataQueryParams,
};
export { TopCoinsOrder, CoinChartInterval };
