import { combineReducer } from "redux";
import users from "./users";

const entitiesReducer = combineReducer({
  users,
});

export default entitiesReducer;
