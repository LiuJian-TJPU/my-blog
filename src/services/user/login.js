import request from "@utils/request";

const baseURL = "/api/user";

// 登录
export const login = ({ username, password }) => {
  return request.post(`${baseURL}/login`, { username, password });
};
