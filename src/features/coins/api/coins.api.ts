import type { Coin, CoinDetail, MarketCoinChart } from "../types";
import { http } from "@/lib/api/http";
import {
  GetCoinChartDataQueryParams,
  GetTopCoinsQueryParams,
} from "./coins.types";

const getTopCoins = (params: GetTopCoinsQueryParams) => {
  return http.get<Coin[]>("/coins/markets", {
    params,
  });
};

const getCoinData = (id: string) => {
  return http.get<CoinDetail>(`/coins/${id}`);
};

const getCoinMarketDetail = (
  id: string,
  params: GetCoinChartDataQueryParams,
) => {
  return http.get<MarketCoinChart>(`/coins/${id}/market_chart`, {
    params: params,
  });
};

export { getTopCoins, getCoinMarketDetail, getCoinData };
