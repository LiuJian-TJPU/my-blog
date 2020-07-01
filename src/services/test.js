import request from "@utils/request";

const baseURL = "/api/test";

export const test = () => {
  return request.get(baseURL);
};

export const upload = (file) => {
  return request.post(`${baseURL}/upload`, file, {
    onUploadProgress: (a) => {
      console.log(a);
    },
  });
};
