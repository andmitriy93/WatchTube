import {
  RECEIVE_VIDEOS,
  RECEIVE_VIDEO,
  // RECEIVE_SEARCHED_VIDEOS,
} from "../actions/video_actions";

const videoReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    // case RECEIVE_SEARCHED_VIDEOS:
    //     return action.searchedVideos;
    case RECEIVE_VIDEO:
      nextState[action.video.id] = action.video;
      return nextState;
    default:
      return state;
  }
};

export default videoReducer;
