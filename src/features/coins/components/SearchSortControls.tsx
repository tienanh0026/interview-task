import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

interface SearchSortControlsProps {
  search: string;
  sortBy: "price" | "change";
  sortDirection: "asc" | "desc";
  onSearchChange: (value: string) => void;
  onSortByChange: (value: "price" | "change") => void;
  onSortDirectionChange: (value: "asc" | "desc") => void;
}

export function SearchSortControls({
  search,
  sortBy,
  sortDirection,
  onSearchChange,
  onSortByChange,
  onSortDirectionChange,
}: SearchSortControlsProps) {
  return (
    <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Search
        </label>
        <Input
          value={search}
          placeholder="Filter by name"
          className="h-11"
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Sort by
        </label>
        <select
          value={sortBy}
          onChange={(event) =>
            onSortByChange(event.target.value as "price" | "change")
          }
          className="flex h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        >
          <option value="price">Price</option>
          <option value="change">24h Change</option>
        </select>
      </div>
      <div className="flex items-end justify-between gap-3">
        <div className="w-full">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Direction
          </label>
          <select
            value={sortDirection}
            onChange={(event) =>
              onSortDirectionChange(event.target.value as "asc" | "desc")
            }
            className="flex h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>
    </div>
  );
}
