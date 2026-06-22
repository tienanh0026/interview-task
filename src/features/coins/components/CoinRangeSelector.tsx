import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TimeRange } from "../types/chart";

interface CoinRangeSelectorProps {
  range: TimeRange;
  onRangeChange: (range: TimeRange) => void;
}

export default function CoinRangeSelector({
  range,
  onRangeChange,
}: CoinRangeSelectorProps) {
  return (
    <Tabs
      value={String(range)}
      onValueChange={(value) => onRangeChange(Number(value) as TimeRange)}
    >
      <TabsList>
        <TabsTrigger value={String(TimeRange.DAY)}>24H</TabsTrigger>
        <TabsTrigger value={String(TimeRange.WEEK)}>7D</TabsTrigger>
        <TabsTrigger value={String(TimeRange.MONTH)}>30D</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
