import LXRequest from "./request";
import { BASE_URL1, TIME_OUT1 } from "./config";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN } from "@/global/constants";

const lxRequest = new LXRequest({
  baseURL: BASE_URL1,
  timeout: TIME_OUT1,
  interceptors: {
    requestInterceptor: (config) => {
      // 每个请求都携带token
      const token = localCache.getCache(LOGIN_TOKEN);
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
});

export default lxRequest;
