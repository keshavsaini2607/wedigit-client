import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { API } from "../utils/constants";

const server = axios.create({
   baseURL: API.BASE_URL,
   timeout: 8000,
   maxRedirects: 5,
});

server.interceptors.request.use(
   function (config: InternalAxiosRequestConfig<unknown>) {
      const token = localStorage.getItem("access_token");
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
   },
   (error: unknown) => {
      return Promise.reject(error);
   }
);

server.interceptors.response.use(
   (response: AxiosResponse<unknown, unknown>) => {
      return response;
   },
   (error) => {
      if (error.response.status === 401) {
         localStorage.removeItem("access_token");
         window.location.reload();
      }
      return Promise.reject(error);
   }
);

export default server;
