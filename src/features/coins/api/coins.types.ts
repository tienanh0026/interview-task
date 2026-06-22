import { PaginationParams } from "@/lib/api/types";

interface GetTopCoinsQueryParams extends PaginationParams {
  vs_currency: string;
  order: TopCoinsOrderType;
}

type TopCoinsOrderType = (typeof TopCoinsOrder)[keyof typeof TopCoinsOrder];

const TopCoinsOrder = {
  CAP_ASC: "market_cap_asc",
  CAP_DESC: "market_cap_desc",
  VOLUME_ASC: "volume_asc",
  VOLUME_DESC: "volume_desc",
} as const;

export type { GetTopCoinsQueryParams, TopCoinsOrderType };
export { TopCoinsOrder };
