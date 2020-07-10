import { isDev } from "@utils/env";

// 开发环境配置
export const dev = {
  baseURL: "http://localhost:3000",
};

// 生产环境配置
export const prod = {
  baseURL: "http://liujiancn.cn:3000",
};

export default isDev ? dev : prod;
