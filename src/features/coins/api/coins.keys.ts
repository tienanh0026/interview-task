import {
  GetCoinChartDataQueryParams,
  GetTopCoinsQueryParams,
} from "./coins.types";

export const coinKeys = {
  all: ["coins"] as const,
  list: (params: Omit<GetTopCoinsQueryParams, "page">) =>
    [...coinKeys.all, "list", params] as const,
  coinDetail: (id: string) => [...coinKeys.all, "detail", id] as const,
  coinMarketDetail: (id: string, params: GetCoinChartDataQueryParams) =>
    [...coinKeys.all, "chart", "detail", id, params] as const,
};
