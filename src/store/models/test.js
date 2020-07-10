export default {
  namespace: "test",
  state: {
    text: 123,
  },
  *effects({ takeLatest }) {
    yield takeLatest(`test/test`, function* (action) {
      console.log(action);
    });
  },
};
