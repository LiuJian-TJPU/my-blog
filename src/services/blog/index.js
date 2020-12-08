import request from "@utils/request";

const baseURL = "/api/blog";

/**
 * @description 获取详情
 * @param {*} id
 */
export const getBlogDetail = ({ id }) => {
  return request.get(`${baseURL}/${id}`);
};

/**
 * @description 获取详情
 * @param {*} id
 */
export const createBlog = (data) => {
  return request.post(`${baseURL}/`);
};
