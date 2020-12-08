import { create } from "dva-core";
import createLoading from "dva-loading";

const app = create();

app.use(createLoading());

// 批量引入models
const context = require.context("./models/", true, /\.js$/);
context.keys().forEach((i) => {
  let model = context(i).default;
  // if (!model.reducers) {
  //   model.reducers = {
  //     save(state, action) {
  //       return { ...state, ...action.payload };
  //     },
  //   };
  // }
  // console.log(model);
  app.model(model);
});

app.start();

export default app._store;
