import * as loginApi from "@server/user/login";

export const actionToggleLogin = (open) => ({
  type: "user/save",
  payload: {
    open,
  },
});

export const actionAsyncGetUserInfo = () => ({
  type: "user/getUserInfo",
});

export const actionAsyncLoginCheck = () => ({
  type: "user/loginCheck",
});

export const actionAsyncLogin = ({ code }) => ({
  type: "user/login",
  payload: { code },
});

export const actionAsyncLogout = () => ({
  type: "user/logout",
});

export const actionSave = (payload) => ({
  type: "user/save",
  payload,
});

const defaultState = {
  userInfo: {},
  isLogin: false,
  open: false, // 登录框是否打开
};
export default {
  namespace: "user",

  state: defaultState,

  effects: {
    *page({ payload }, { call, put }) {},
    *loginCheck(_, { call, put }) {
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
    *login({ payload }, { call, put }) {
      const res = yield call(loginApi.login, payload);
      if (res.success) {
        yield put(
          actionSave({
            userInfo: res.data,
            open: false,
          })
        );
      }
      return res;
    },
    *getUserInfo(_, { call, put }) {
      const res = yield call(loginApi.getUserInfo);
      if (res.success) {
        yield put({
          type: "save",
          payload: {
            userInfo: res.data,
            open: false,
          },
        });
      }
      return res;
    },
    *logout(_, { call }) {
      const res = yield call(loginApi.logout);
      return res;
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
