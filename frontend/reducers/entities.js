import { combineReducers } from "redux";
import users from "./users";
import videos from './video_reducer'

export default combineReducers({
  users,
  videos,
});
