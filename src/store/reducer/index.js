// import { combineReducers } from "redux";
// import * as sagaEffects from "redux-saga/effects";
// import common, { a } from "./common";
// import test from "./test";

// let reducers = {};
// let sagas = [];

// const models = [a, test];
// models.forEach((model) => {
//   const { namespace, state: initialState, effects } = model;
//   const reducer = (state = initialState, { type, payload = {} }) => {
//     if (type === `${namespace}/save`) {
//       return { ...state, ...payload };
//     } else {
//       return initialState;
//     }
//   };
//   Object.assign(reducers, { [namespace]: reducer });

//   // Object.keys(effects).map((key) => sagaEffects.takeEvery(key, ))
//   // console.log();

//   sagas.push(function* () {
//     Object.keys(effects).map((key) =>
//       sagaEffects.takeEvery(
//         `${namespace}/${key}`,
//         effects[key].bind(null, sagaEffects)
//       )
//     );
//   });
// });

// // console.log(reducers);
// export default combineReducers(reducers);
