import { GetTopCoinsQueryParams } from "./coins.types";

export const coinKeys = {
  all: ["coins"] as const,
  list: (params: Omit<GetTopCoinsQueryParams, "page">) =>
    [...coinKeys.all, "list", params] as const,
};
