import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

/**
 * rootReducer State
 * @typedef {object} RootReducer
 * @property {import('./projectReducer').ProjectReducerState} project
 */
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
