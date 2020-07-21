import { isDev, api_env } from "@utils/env";

// 开发环境配置
export const dev = {
  baseURL: "http://localhost:3000",
};

// 生产环境配置
export const prod = {
  baseURL: "http://liujiancn.cn:3000",
};

export const api_env_list = {
  online: {
    "/api": proxy,
  },
  locale: {
    "/api": proxy,
  },
  none: false,
};

export const proxy = api_env_list[api_env];

export default isDev ? dev : prod;
