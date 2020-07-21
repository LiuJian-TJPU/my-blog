import { login, register } from "@server/user";
const namespace = "user";
const userLoginType = `${namespace}/login`;
const userSaveType = `${namespace}/save`;

export default {
  namespace: "user",
  state: {
    userInfo: {},
    isLogin: false,
    open: true,
  },
  *effects({ takeLatest, call, put }) {
    yield takeLatest(userLoginType, function* ({ payload, callback }) {
      console.log(payload);
      const data = yield call(login, payload);
      if (data.success) {
        callback && callback();
        yield put({
          type: userSaveType,
          payload: {
            userInfo: data.data,
          },
        });
      }
    });
    yield takeLatest("user/register", function* ({ payload, callback }) {
      const data = yield call(register, payload);
      if (data.success) {
        callback && callback();
      }
    });
  },
};

export { userLoginType, userSaveType };
