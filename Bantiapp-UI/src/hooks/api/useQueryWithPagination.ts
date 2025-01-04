import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { PaginatedResponse } from "@/types/api";

interface QueryFnParams {
  pageParam?: unknown;
  signal?: AbortSignal;
}

export function useQueryWithPagination<T>(
  queryKey: unknown[],
  queryFn: (params: QueryFnParams) => Promise<PaginatedResponse<T>>,
  options?: Omit<
    UseInfiniteQueryOptions<
      PaginatedResponse<T>,
      Error,
      PaginatedResponse<T>,
      PaginatedResponse<T>,
      unknown[]
    >,
    "queryKey" | "queryFn" | "getNextPageParam" | "initialPageParam"
  >
) {
  return useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1, signal }) => queryFn({ pageParam, signal }),
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.currentPage < lastPage.meta.totalPages) {
        return lastPage.meta.currentPage + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
    ...options,
  });
}
