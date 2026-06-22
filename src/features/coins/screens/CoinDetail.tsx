import { useMemo, useState } from "react";

import { CoinChartInterval } from "../api/coins.types";
import { useCoinMarketData } from "../hooks/useCoinMarketData";
import { CoinPriceChart } from "../components/CoinPriceChart";
import { TimeRange } from "../types/chart";
import CoinRangeSelector from "../components/CoinRangeSelector";
import { useCoinDetailData } from "../hooks/useCoinDetail";
import InfoRow from "../components/InfoRow";
import { Button } from "@/components/ui/button";

interface CoinDetailProps {
  id: string;
}

function CoinDetail({ id }: CoinDetailProps) {
  const [range, setRange] = useState<TimeRange>(TimeRange.DAY);

  const {
    data: coinDetail,
    isLoading: isCoinDetailLoading,
    isError,
    error,
    refetch,
  } = useCoinDetailData(id);

  const { data: coinMarket, isLoading: isCoinMarketLoading } =
    useCoinMarketData(id, {
      days: range,
      vs_currency: "usd",
      interval: CoinChartInterval.HOURLY,
    });

  const chartData = useMemo(() => {
    if (!coinMarket) return [];

    return coinMarket.prices.map(([timestamp, price]) => ({
      time: timestamp,
      price,
    }));
  }, [coinMarket]);

  if (isCoinDetailLoading) {
    return <div className="h-96 mt-6 rounded-lg bg-gray-200 animate-pulse" />;
  }

  if (isError)
    return (
      <div className="mt-6 rounded-[16px] border border-rose-200 bg-rose-50 p-6 text-rose-900">
        <p className="mb-3 text-lg font-semibold">Unable to load market data</p>
        <p className="mb-4 text-sm text-rose-800">
          {error?.message ?? "An unexpected error occurred."}
        </p>
        <Button onClick={() => refetch()} variant="outline">
          Retry
        </Button>
      </div>
    );

  if (!coinDetail) return null;

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={coinDetail.image.large}
            alt={coinDetail.name}
            className="h-16 w-16 rounded-full"
          />

          <div>
            <h1 className="text-3xl font-bold">{coinDetail.name}</h1>

            <p className="text-muted-foreground uppercase">
              {coinDetail.symbol}
            </p>
          </div>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date(coinDetail.last_updated).toLocaleString()}
        </div>
      </div>

      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Price Chart</h2>

          <CoinRangeSelector range={range} onRangeChange={setRange} />
        </div>

        {isCoinMarketLoading ? (
          <div className="w-full h-[300px] rounded-[16px] border border-slate-200/80 bg-gray-200 p-6 shadow-soft animate-pulse"></div>
        ) : (
          <CoinPriceChart data={chartData} range={range} />
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">General Information</h3>

          <div className="space-y-3 text-sm">
            <InfoRow label="Coin ID" value={coinDetail.id} />

            <InfoRow label="Symbol" value={coinDetail.symbol.toUpperCase()} />

            <InfoRow label="Slug" value={coinDetail.web_slug} />
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm lg:col-span-2">
          <h3 className="mb-4 text-lg font-semibold">About</h3>

          <div
            className="prose prose-sm max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{
              __html: coinDetail.description.en,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CoinDetail;
