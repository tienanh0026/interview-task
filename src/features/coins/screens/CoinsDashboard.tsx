import { useMemo, useState } from "react";
import { useInfiniteCoins } from "../hooks/useInfiniteCoins";
import { CoinCard } from "../components/CoinCard";
import { SearchSortControls } from "../components/SearchSortControls";
import { Button } from "@/components/ui/button";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import InfiniteObserverElement from "@/components/common/InfiniteObserverElement";
import { TopCoinsOrder, TopCoinsOrderType } from "../api/coins.types";

const sortOptions = {
  price: (a: any, b: any) => a.current_price - b.current_price,
  change: (a: any, b: any) =>
    a.price_change_percentage_24h - b.price_change_percentage_24h,
};

export function CoinsDashboard() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"price" | "change">("price");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const coinQueryOrder = useMemo<TopCoinsOrderType>(() => {
    switch (sortBy) {
      case "price":
        return sortDirection === "asc"
          ? TopCoinsOrder.CAP_ASC
          : TopCoinsOrder.CAP_DESC;
      case "change":
        return sortDirection === "asc"
          ? TopCoinsOrder.VOLUME_ASC
          : TopCoinsOrder.VOLUME_DESC;
    }
  }, []);

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    refetch,
    isFetching,
  } = useInfiniteCoins({
    per_page: 20,
    vs_currency: "usd",
    order: coinQueryOrder,
  });

  const { observerRef } = useInfiniteScroll({
    fetchNextPage: fetchNextPage,
    hasNextPage: hasNextPage,
    isFetching: isFetching,
  });

  const coins = useMemo(
    () => data?.pages.flatMap((page) => page) ?? [],
    [data],
  );

  const filteredCoins = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    console.log("data", data);

    const searched = normalizedSearch
      ? coins.filter((coin) =>
          [coin.name, coin.symbol].some((value) =>
            value.toLowerCase().includes(normalizedSearch),
          ),
        )
      : coins;

    const sorted = [...searched].sort(sortOptions[sortBy]);

    return sortDirection === "asc" ? sorted : sorted.reverse();
  }, [coins, search, sortBy, sortDirection]);

  return (
    <section className="space-y-6">
      <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-soft">
        <SearchSortControls
          search={search}
          sortBy={sortBy}
          sortDirection={sortDirection}
          onSearchChange={setSearch}
          onSortByChange={setSortBy}
          onSortDirectionChange={setSortDirection}
        />
      </div>

      {isError ? (
        <div className="rounded-[32px] border border-rose-200 bg-rose-50 p-6 text-rose-900">
          <p className="mb-3 text-lg font-semibold">
            Unable to load market data
          </p>
          <p className="mb-4 text-sm text-rose-800">
            {error?.message ?? "An unexpected error occurred."}
          </p>
          <Button onClick={() => refetch()} variant="secondary">
            Retry
          </Button>
        </div>
      ) : isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-44 rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-soft animate-pulse"
            />
          ))}
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              {isFetching ? " · refreshing…" : ""}
            </p>
            {filteredCoins.length === 0 && search ? (
              <p className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                No matches for “{search}”. Try another symbol or coin name.
              </p>
            ) : null}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCoins.length === 0 ? null : (
              <>
                {filteredCoins.map((coin) => (
                  <CoinCard key={coin.id} coin={coin} />
                ))}
                <InfiniteObserverElement
                  hasNextPage={hasNextPage}
                  observerRef={observerRef}
                  isFetching={isFetchingNextPage}
                  className="col-span-full"
                />
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
}
