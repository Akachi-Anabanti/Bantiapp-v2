import { QueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { ApiErrorHandler } from "./error-handler";
import { AxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: (failureCount, error) => {
        if (error instanceof AxiosError) {
          if ([401, 403, 404].includes(error.response?.status || 0)) {
            return false;
          }
        }
        return failureCount < 3;
      },
      onError: (error) => {
        ApiErrorHandler.handle(error);
      },
    },
    mutations: {
      onError: (error) => {
        ApiErrorHandler.handle(error);
      },
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Operation completed successfully",
        });
      },
    },
  },
});
