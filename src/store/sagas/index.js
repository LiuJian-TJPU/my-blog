import { delay, put, takeEvery, all } from "redux-saga/effects";

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
export default function* root() {
  yield all([helloSaga(), async()]);
}
