import { combineReducers } from "redux";
import users from "./users";
import videos from "./video_reducer";
import comments from "./comments_reducer";

export default combineReducers({
  users,
  videos,
  comments,
});
