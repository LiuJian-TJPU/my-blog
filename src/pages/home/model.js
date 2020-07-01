import { test, upload } from "@server/test";

// 初始化state
const initialState = {
  num: 0,
};

/**
 *  测试redux
 */
export const testAction = () => async (dispatch) => {
  const res = await test();
  console.log(res);
  dispatch({
    type: "save",
    payload: {
      num: res.test,
    },
  });
};

export const fileUpload = (files) => async (dispatch) => {
  const formData = new FormData();
  [...files].forEach((file) => {
    formData.append("files", file);
  });
  // files
  // formData.append("files", file);
  const res = await upload(formData);
  console.log(res);
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "save":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
export default reducer;
