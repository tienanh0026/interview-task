import { useInfiniteQuery } from "@tanstack/react-query";
import { getTopCoins } from "../api/coins.api";
import { GetTopCoinsQueryParams } from "../api/coins.types";
import { coinKeys } from "../api/coins.keys";

export function useInfiniteCoins(params: Omit<GetTopCoinsQueryParams, "page">) {
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
  });
}
