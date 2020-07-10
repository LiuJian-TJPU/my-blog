import { login, register } from "@server/user";
export default {
  namespace: "user",
  state: {
    userInfo: {},
  },
  *effects({ takeLatest, call, put }) {
    yield takeLatest("user/login", function* ({ payload, callback }) {
      const data = yield call(login, payload);
      if (data.success) {
        callback && callback();
        yield put({
          type: "user/save",
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
