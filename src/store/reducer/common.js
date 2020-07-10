import { takeEvery, call, put } from "redux-saga/effects";
const initialState = {
  login: false,
  userInfo: {},
};

const type = {};

const login = () => async (dispatch) => {
  const res = await test();
  console.log(res);
  dispatch({
    type: "save",
    payload: {
      num: res.test,
    },
  });
};

export const a = {
  namespace: "user",
  state: {},
  effects: {
    *login(action) {
      // yield call;
    },
  },
};

export function* commonSaga() {
  yield takeEvery("LOGIN", login);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "save":
      return {
        ...state,
        b: 456,
      };
    default:
      return state;
  }
};
export default reducer;
