const path = require("path");

const resolve = (p) => path.resolve(__dirname, "../", p);

const isDev = process.env.NODE_ENV === "development";

const api_env = process.env.API_ENV;

const api_env_list = {
  online: {
    "/api": "http://liujiancn.cn:3000",
  },
  locale: {
    "/api": "http://localhost:3000",
  },
};

const proxy = api_env_list[api_env];

module.exports = {
  isDev,
  resolve,
  proxy,
};
