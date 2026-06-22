import { Card } from "@/components/ui/card";
import type { Coin } from "../types";
import { Badge } from "./Badge";

interface CoinCardProps {
  coin: Coin;
}

export function CoinCard({ coin }: CoinCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(coin.current_price);

  const formattedChange = `${(coin.price_change_percentage_24h || 0).toFixed(2)}%`;
  const positive = coin.price_change_percentage_24h
    ? coin.price_change_percentage_24h >= 0
    : false;

  return (
    <Card className="space-y-5 border p-4 border-slate-300 bg-card">
      <div className="flex items-center gap-4">
        <img
          src={coin.image}
          alt={coin.name}
          className="h-12 w-12 rounded-full bg-slate-100 p-1"
        />
        <div>
          <p className="text-base font-semibold text-slate-950">{coin.name}</p>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            {coin.symbol}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-slate-500">Current Price</p>
          <p className="text-lg font-semibold text-slate-950">
            {formattedPrice}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-slate-500">24h Change</p>
          <Badge variant={positive ? "positive" : "negative"}>
            {formattedChange}
          </Badge>
        </div>
      </div>
    </Card>
  );
}
