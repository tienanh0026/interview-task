import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { coinKeys } from "../api/coins.keys";
import { getCoinData } from "../api/coins.api";
import { CoinDetail } from "../types";

export function useCoinDetailData(
  id: string,
  options?: Omit<
    UseQueryOptions<CoinDetail, Error, CoinDetail>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: coinKeys.coinDetail(id),
    queryFn: () => getCoinData(id),
    staleTime: 60 * 1000,
    retry: 2,
    ...options,
  });
}
