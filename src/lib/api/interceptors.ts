// lib/api/interceptors.ts

import { api } from "./axios";

export const setupInterceptors = () => {
  api.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error),
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const message =
        error.response?.data?.message ??
        error.message ??
        "Something went wrong";

      return Promise.reject({
        ...error,
        message,
      });
    },
  );
};
