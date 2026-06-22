import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getCoinMarketDetail } from "../api/coins.api";
import { GetCoinChartDataQueryParams } from "../api/coins.types";
import { coinKeys } from "../api/coins.keys";
import { MarketCoinChart } from "../types";

export function useCoinMarketData(
  id: string,
  params: GetCoinChartDataQueryParams,
  options?: Omit<
    UseQueryOptions<MarketCoinChart, Error, MarketCoinChart>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: coinKeys.coinMarketDetail(id, params),
    queryFn: () => getCoinMarketDetail(id, params),
    staleTime: 60 * 1000,
    retry: 2,
    ...options,
  });
}
