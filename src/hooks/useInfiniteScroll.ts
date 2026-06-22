import { useRef, useEffect } from "react";

interface InfiniteScrollOptions {
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetching: boolean;
  enabled?: boolean;
}

export function useInfiniteScroll({
  fetchNextPage,
  hasNextPage,
  isFetching,
  enabled = true,
}: InfiniteScrollOptions) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer
  useEffect(() => {
    if (!enabled) return;

    const target = observerRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [enabled, fetchNextPage, hasNextPage, isFetching]);

  // Auto-fill viewport
  useEffect(() => {
    if (!enabled || !hasNextPage || isFetching) {
      return;
    }

    const pageHeight = document.documentElement.scrollHeight;

    const viewportHeight = window.innerHeight;

    const isScrollable = pageHeight > viewportHeight;

    if (!isScrollable) {
      fetchNextPage();
    }
  }, [enabled, hasNextPage, isFetching, fetchNextPage]);

  return {
    observerRef,
  };
}
