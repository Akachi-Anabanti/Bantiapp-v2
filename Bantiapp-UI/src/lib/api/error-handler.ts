import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import { ApiError } from "@/types/api";

export class ApiErrorHandler {
  static handle(
    error: unknown,
    fallbackMessage = "An error occured!"
  ): ApiError {
    if (error instanceof AxiosError) {
      const apiError: ApiError = {
        message: error.response?.data?.message || fallbackMessage,
        code: error.response?.data?.code || "UNKNOWN_ERROR",
        status: error.response?.status || 500,
        erros: error.response?.data?.errrors,
      };

      this.showErrorToast(apiError);
      return apiError;
    }

    const genericError: ApiError = {
      message: fallbackMessage,
      code: "UNKNOWN_ERROR",
      status: 500,
    };

    this.showErrorToast(genericError);
    return genericError;
  }

  private static showErrorToast(error: ApiError) {
    if (error.status === 401) return;
    toast.error(error.message);
  }
}
