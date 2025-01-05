import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { ApiErrorHandler } from "@/lib/api/error-handler";
import { ApiError } from "@/types/api";

interface OptimisticUpdateConfig<TData, TVariables> {
  queryKey: unknown[];
  updateFn: (oldData: TData, variables: TVariables) => TData;
}

export function useMutationWithOptimisticUpdate<
  TData,
  TVariables,
  TError = ApiError,
  TContext = { previousData: TData }
>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  optimisticConfig: OptimisticUpdateConfig<TData, TVariables>,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    "mutationFn"
  >
) {
  const queryClient = useQueryClient();
  const { queryKey, updateFn } = optimisticConfig;

  return useMutation({
    mutationFn,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey });
      const previousData = queryClient.getQueryData<TData>(queryKey);

      if (previousData) {
        queryClient.setQueryData<TData>(queryKey, (old) => {
          if (!old) return old;
          return updateFn(old, variables);
        });
      }

      toast({
        title: "Processing",
        description: "Please wait...",
      });

      return { previousData };
    },
    onError: (err, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData);
      }
      ApiErrorHandler.handle(err);
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: "Operation completed successfully",
      });
      queryClient.setQueryData(queryKey, data);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
    ...options,
  });
}
