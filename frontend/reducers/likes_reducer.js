import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/likes_actions";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  // let comment;
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      // comment = nextState[action.like.comment_id];
      // comment.liked_by_current_user = true;
      // comment.likes += 1;
      // comment.current_user_like_id = action.like.id
      nextState[action.like.id] = action.like
      return nextState;
    case REMOVE_LIKE:
      // comment = nextState[action.like.comment_id];
      // comment.liked_by_current_user = false;
      // comment.likes -= 1;
      delete nextState[action.like.id];
      return nextState;
    default:
      return state;
  }
}

export default likesReducer;