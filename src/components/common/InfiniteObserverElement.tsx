import { cn } from "@/lib/utils";
import type { LegacyRef } from "react";
import { useEffect } from "react";

export default function InfiniteObserverElement({
  observerRef,
  renderLoading,
  onRender,
  isFetching,
  hasNextPage,
  className,
}: {
  observerRef: LegacyRef<HTMLDivElement> | undefined;
  renderLoading?: () => React.ReactElement;
  onRender?: () => void;
  isFetching: boolean;
  hasNextPage: boolean;
  className?: string;
}) {
  useEffect(() => {
    if (onRender) onRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div ref={observerRef} className={cn("bg-transparent", className)}>
      <div
        className={cn(
          "flex items-center justify-center text-sm transition-opacity duration-200",
          isFetching ? "opacity-100" : "opacity-0",
          !hasNextPage && "hidden",
        )}
      >
        {renderLoading ? (
          renderLoading()
        ) : (
          <>
            <span>Loading...</span>
          </>
        )}
      </div>
    </div>
  );
}
