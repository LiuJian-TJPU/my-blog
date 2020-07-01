import request from "@utils/request";

const baseURL = "/api/user";

export const getCaptcha = (address) => {
  return request.post(`${baseURL}/captcha`, { address });
};
