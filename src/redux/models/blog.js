import * as loginApi from "@server/user/login";

export const actionBlogSave = (payload) => ({
  type: "blog/save",
  payload,
});

export const actionAsyncLoginCheck = () => ({
  type: "blog/loginCheck",
});

export const actionAsyncLogin = ({ code }) => ({
  type: "blog/login",
  payload: { code },
});

export const actionAsyncLogout = () => ({
  type: "blog/logout",
});

const defaultState = {
  isPreview: false, //是否预览
  isPublish: false, //是否发布
  content: "", // 内容
  firstType: {},
  secondType: {},
};
export default {
  namespace: "blog",

  state: defaultState,

  effects: {
    *page({ payload }, { call, put }) {},
    *create({ payload }, { call, put }) {
      const { success, data } = yield call(loginApi.loginCheck);
      if (success) {
        yield put({
          type: "save",
          payload: {
            userInfo: data,
            open: false,
          },
        });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
