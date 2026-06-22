# Crypto Market Dashboard

A React + TypeScript dashboard that displays the top 20 cryptocurrencies from CoinGecko.

## Features
- Live crypto market data fetched from CoinGecko
- React Query caching and retry handling
- Responsive Tailwind grid layout
- Search by coin name or symbol
- Sort by price and 24h change
- Loading, error, and empty states

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Open the URL printed by Vite

## Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- React Query
- shadcn-style UI primitives

## Project structure
- `src/features/coins` — feature-driven coin dashboard logic
- `src/components/ui` — shared UI primitives
- `src/lib` — reusable app utilities
