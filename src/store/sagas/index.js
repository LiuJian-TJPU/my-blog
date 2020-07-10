import { combineReducers } from "redux";
import * as sagaEffects from "redux-saga/effects";

import models from "../models";

let _reducers = {};
let _sagas = [];

models.forEach((model) => {
  const { namespace, state: initialState, effects } = model;
  const reducer = (state = initialState, { type, payload = {} }) => {
    if (type === `${namespace}/save`) {
      return { ...state, ...payload };
    } else {
      return initialState;
    }
  };
  Object.assign(_reducers, { [namespace]: reducer });

  _sagas.push(effects);

  // Object.keys(effects).forEach((key) => {
  //   // console.log(effects[key]);
  //   _sagas.push(function* () {
  //     const data = yield sagaEffects.takeEvery(
  //       `${namespace}/${key}`,
  //       effects[key].bind(null, sagaEffects)
  //     );
  //     return data;
  //   });
  // });
});

// console.log(reducers);
const reducers = combineReducers(_reducers);
const sagas = function* () {
  yield sagaEffects.all(_sagas.map((saga) => saga(sagaEffects)));
};
export { reducers, sagas };
