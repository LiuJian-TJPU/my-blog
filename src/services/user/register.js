import request from "@utils/request";

const baseURL = "/api/user";

// 获取验证码
export const getCaptcha = (address) => {
  return request.post(`${baseURL}/captcha`, { address });
};

// 注册
export const register = ({ username, password }) => {
  return request.post(`${baseURL}/register`, { username, password });
};
