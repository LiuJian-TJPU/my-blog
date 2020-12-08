import request from "@utils/request";

const baseURL = "/api/user";

// 登录
// export const login = ({ username, password }) => {
//   return request.post(`${baseURL}/login`, { username, password });
// };
export const login = ({ code }) => {
  return request.post(`${baseURL}/login`, { code });
};

export const logout = () => {
  return request.post(`${baseURL}/logout`);
};

// 检查登录
export const loginCheck = () => {
  return request.post(`${baseURL}/loginCheck`);
};

// 获取用户信息
export const getUserInfo = () => {
  return request.get(`${baseURL}/userInfo`);
};
