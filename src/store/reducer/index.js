import { combineReducers } from "redux";
import common from "./common";
import test from "@/pages/home/model";

const reducers = {
  test,
  common,
};

Object.keys(reducers).forEach((key) => {
  console.log(key);
});
export default combineReducers(reducers);
