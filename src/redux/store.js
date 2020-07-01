import { createStore, applyMiddleware } from "redux";
import { isDev } from "@utils/env";

// import createSagaMiddleware from 'redux-saga';

import reducer from "./reducer";
// import saga from './sagas';

import thunk from "./thunk";
import logger from "redux-logger";

// const sagaMiddleware = createSagaMiddleware()
const enhancers = isDev ? [thunk, logger] : [thunk];
const store = createStore(reducer, applyMiddleware(...enhancers));
// sagaMiddleware.run(saga);
export default store;
