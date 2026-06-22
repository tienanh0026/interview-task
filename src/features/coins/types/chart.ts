export const TimeRange = {
  DAY: 1,
  WEEK: 7,
  MONTH: 30,
} as const;

export type TimeRange = (typeof TimeRange)[keyof typeof TimeRange];
