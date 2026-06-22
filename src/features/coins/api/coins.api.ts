import type { Coin } from "../types";
import { http } from "@/lib/api/http";
import { GetTopCoinsQueryParams } from "./coins.types";

const getTopCoins = (params: GetTopCoinsQueryParams) => {
  return http.get<Coin[]>("/coins/markets", {
    params,
  });
};

export { getTopCoins };
