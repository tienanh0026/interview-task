import { format } from "date-fns";

interface CoinChartPoint {
  time: number;
  price: number;
}

interface CoinPriceTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: CoinChartPoint;
  }>;
}
export function CoinPriceTooltip({ active, payload }: CoinPriceTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="rounded-lg border bg-background p-3 shadow-md">
      <div className="text-xs text-muted-foreground">
        {format(new Date(point.time), "MMM dd, yyyy HH:mm")}
      </div>

      <div className="mt-1 font-medium">
        $
        {point.price.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </div>
    </div>
  );
}
