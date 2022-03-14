import { combineReducers } from "redux";

import modalReducer from "./modalReducer";
import configReducer from "./configReducer";

const rootReducer = combineReducers({
  modalReducer: modalReducer,
  configReducer: configReducer,
});

export default rootReducer;
