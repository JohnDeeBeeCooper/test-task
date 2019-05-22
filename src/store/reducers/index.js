import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import data from "./data";

const reducer = combineReducers({
  form,
  data
});
export default reducer;
