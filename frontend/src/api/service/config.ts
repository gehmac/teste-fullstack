/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosInstance } from "axios";

export function getAxiosInstance(
  baseURL: string,
  customHeaders?: Record<string, unknown>
): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL,
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      // if need custom config
      return config;
    },
    (error) => Promise.reject(error)
  );

  return axiosInstance;
}
