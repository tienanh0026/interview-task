import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "positive" | "negative" | "neutral";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "neutral", ...props }, ref) => {
    const styles: Record<string, string> = {
      positive: "bg-emerald-100 text-emerald-700",
      negative: "bg-rose-100 text-rose-700",
      neutral: "bg-slate-100 text-slate-700",
    };
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
          styles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";
