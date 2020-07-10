import { createStore, applyMiddleware } from "redux";
import { isDev } from "@utils/env";

import createSagaMiddleware from "redux-saga";
// import thunk from "./thunk";

import reducer from "./reducer";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
import logger from "redux-logger";

// const enhancers = isDev ? [thunk, logger] : [thunk];
const enhancers = isDev ? [sagaMiddleware, logger] : [sagaMiddleware];
const store = createStore(reducer, applyMiddleware(...enhancers));
sagaMiddleware.run(saga);

export default store;
