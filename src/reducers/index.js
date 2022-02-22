import { combineReducers } from "redux";
import Questions from "./questions";
import Users from "./users";

// here will be the combine reducer for the user sand questions
export default combineReducers({
  Questions,
  Users,
});
