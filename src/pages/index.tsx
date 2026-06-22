import { CoinsDashboard } from "@/features/coins/screens/CoinsDashboard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Top 20 cryptocurrencies
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Live pricing, market capitalization, and 24-hour performance from
          CoinGecko.
        </p>
      </div>
      <CoinsDashboard />
    </div>
  );
}
