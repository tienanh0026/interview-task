import { format } from "date-fns";
import { TimeRange } from "../types/chart";

function getChartConfig(range: TimeRange) {
  switch (range) {
    case TimeRange.DAY:
      return {
        tickFormatter: (value: number) =>
          format(new Date(Number(value)), "HH:mm"),
        paddingPercent: 0.1,
      };

    case TimeRange.WEEK:
      return {
        tickFormatter: (value: number) =>
          format(new Date(Number(value)), "EEE"),
        paddingPercent: 0.12,
      };

    case TimeRange.MONTH:
      return {
        tickFormatter: (value: number) =>
          format(new Date(Number(value)), "dd MMM"),
        paddingPercent: 0.15,
      };

    default:
      return {
        tickFormatter: (value: number) =>
          format(new Date(Number(value)), "HH:mm"),
        paddingPercent: 0.1,
      };
  }
}

export { getChartConfig };
