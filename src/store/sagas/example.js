import {
  delay,
  put,
  takeEvery,
  takeLatest,
  all,
  call,
  take,
  debounce,
  throttle,
} from "redux-saga/effects";

// saga 入门操作
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

export function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* async() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}
export function* root() {
  yield all([helloSaga(), async()]);
}

// saga 异步请求。

const testUrl = "http://liujiancn.cn:3000/api/test";

const fetchAPI = () => {
  return fetch(testUrl, { credentials: "include" }).then((res) => res.json());
};

function* fetchData() {
  try {
    // yield delay(2000);
    const data = yield call(fetchAPI);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function* log() {
  // 使用takeEvery
  // yield takeEvery("*", function* log(action) {
  //     console.log(action);
  //   });

  // 使用take
  while (true) {
    const action = yield take("*");
    console.log(action);
  }
}

function* watchFirstThreeTodosCreation() {
  for (let i = 0; i < 3; i++) {
    const action = yield take("*");
  }
  yield put({ type: "SHOW_CONGRATULATION" });
}

export default function* rootSaga() {
  // ["FETCH_DATA", "test"].forEach((key) => {const action = yield takeEvery(key, fetchData)})
  yield takeEvery("user/login", fetchData);
  // yield takeLatest("FETCH_DATA", fetchData);
  // yield throttle(2000, "FETCH_DATA", fetchData); //节流
  // yield debounce(2000, "FETCH_DATA", fetchData); // 防抖
  // yield watchFirstThreeTodosCreation();
}
