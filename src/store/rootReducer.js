import { combineReducers } from "redux";

import login from "./login/reducer";

const reducers = combineReducers({
  login,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};
export default rootReducer;
