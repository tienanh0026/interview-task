import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { getChartConfig } from "../utils/chart";
import { TimeRange } from "../types/chart";
import { CoinPriceTooltip } from "./CoinPriceTooltip";

interface CoinPriceChartProps {
  data: {
    time: number;
    price: number;
  }[];
  range: TimeRange;
}

const chartConfig = {
  price: {
    label: "Price",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function CoinPriceChart({ data, range }: CoinPriceChartProps) {
  const config = getChartConfig(range);

  const minPrice = Math.min(...data.map((d) => d.price));
  const maxPrice = Math.max(...data.map((d) => d.price));

  const priceRange = maxPrice - minPrice;

  const padding = Math.max(priceRange * 0.15, maxPrice * 0.005);

  const yMin = minPrice - padding;
  const yMax = maxPrice + padding;

  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="time"
          tickFormatter={config.tickFormatter}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />

        <YAxis
          domain={[yMin, yMax]}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
          axisLine={false}
        />

        <ChartTooltip cursor={false} content={<CoinPriceTooltip />} />

        <Area
          dataKey="price"
          type="linear"
          fill="var(--chart-5)"
          fillOpacity={0.3}
          stroke="var(--chart-5)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
