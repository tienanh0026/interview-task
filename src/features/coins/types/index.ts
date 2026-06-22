export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
  price_change_percentage_24h: number | null;
  market_cap: number;
  total_volume: number;
}

export interface MarketCoinChart {
  market_caps: [number, number][];
  prices: [number, number][];
  total_volumes: [number, number][];
}

export interface CoinDetail {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  platforms: Record<string, string>;

  description: {
    en: string;
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  last_updated: string;
}
