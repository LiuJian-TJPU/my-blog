import { login, register } from "@server/user";

const namespace = "common";
export default {
  namespace,
  state: {
    position: {},
  },
  *effects({ takeLatest, call, put }) {
    yield takeLatest(`${namespace}/login`, function* ({ payload, callback }) {
      const data = yield call(login, payload);
      if (data.success) {
        callback && callback();
        yield put({
          type: `${namespace}/save`,
          payload: {
            userInfo: data.data,
          },
        });
      }
    });
  },
};
