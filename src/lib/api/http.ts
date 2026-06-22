import { api } from "@/lib/api/axios";
import type { AxiosRequestConfig } from "axios";

export const http = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await api.get<T>(url, config);

    return data;
  },

  post: async <T, B = unknown>(
    url: string,
    body?: B,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const { data } = await api.post<T>(url, body, config);

    return data;
  },

  put: async <T, B = unknown>(
    url: string,
    body?: B,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const { data } = await api.put<T>(url, body, config);

    return data;
  },

  patch: async <T, B = unknown>(
    url: string,
    body?: B,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const { data } = await api.patch<T>(url, body, config);

    return data;
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const { data } = await api.delete<T>(url, config);

    return data;
  },
};
