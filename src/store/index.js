import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { isDev } from "@utils/env";
import { reducers, sagas } from "./sagas";

import createSagaMiddleware from "redux-saga";
// import thunk from "./thunk";

// import reducer from "./reducer";
// import example from "./sagas/example";

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  predicate: (getState, action) => action.type !== "common/save",
});

// const enhancers = isDev ? [thunk, logger] : [thunk];
const enhancers = isDev ? [sagaMiddleware, logger] : [sagaMiddleware];
const store = createStore(reducers, applyMiddleware(...enhancers));
sagaMiddleware.run(sagas);

export default store;
