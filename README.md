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

### 1. Create environment variables

Create a `.env` file in the project root:

```env
VITE_BASE_API=https://api.coingecko.com/api/v3
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open the application

Open the URL printed by Vite in your browser.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack Query (React Query)
- Axios
- Recharts
- shadcn/ui

## Project Structure

```txt
src/
├── features/
│   └── coins/
│       ├── api/
│       ├── components/
│       ├── hooks/
│       ├── screens/
│       ├── types/
│       └── utils/
│
├── components/
│   └── ui/
│
├── shared/
│
├── lib/
│   ├── api/
│   └── utils/
│
└── routes/
```

### Main Directories

- `src/features/coins` — Coin dashboard feature, APIs, hooks, components, and screens
- `src/components/ui` — Shared UI primitives based on shadcn/ui
- `src/lib/api` — Axios instance and HTTP utilities
- `src/lib/utils` — Common helper functions
- `src/routes` — Application routing configuration
- `src/shared` — Shared components, hooks, and providers

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_BASE_API` | CoinGecko API base URL |

Example:

```env
VITE_BASE_API=https://api.coingecko.com/api/v3
```