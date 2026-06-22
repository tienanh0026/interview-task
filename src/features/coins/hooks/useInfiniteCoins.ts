import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { getTopCoins } from "../api/coins.api";
import { GetTopCoinsQueryParams } from "../api/coins.types";
import { coinKeys } from "../api/coins.keys";
import { Coin } from "../types";

type InfiniteCoinsOptions = Omit<
  UseInfiniteQueryOptions<
    Coin[],
    Error,
    InfiniteData<Coin[], number>,
    ReturnType<typeof coinKeys.list>,
    number
  >,
  "queryKey" | "queryFn" | "getNextPageParam" | "initialPageParam"
>;

export function useInfiniteCoins(
  params: Omit<GetTopCoinsQueryParams, "page">,
  options?: Omit<
    InfiniteCoinsOptions,
    "queryKey" | "queryFn" | "getNextPageParam" | "initialPageParam"
  >,
) {
  return useInfiniteQuery({
    queryKey: coinKeys.list(params),

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      getTopCoins({
        ...params,
        page: pageParam,
      }),

    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      return lastPage.length === params.per_page
        ? lastPageParam + 1
        : undefined;
    },

    staleTime: 60 * 1000,
    retry: 2,
    ...options,
  });
}
