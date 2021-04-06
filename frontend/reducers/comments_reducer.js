import {
  RECEIVE_COMMENTS,
  REMOVE_COMMENT,
  RECEIVE_COMMENT,
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let comment;
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case REMOVE_COMMENT:
      delete nextState[action.comment.id];
      return nextState;
    case RECEIVE_LIKE:
      comment = nextState[action.like.comment_id];
      comment.liked_by_current_user = true;
      comment.likes += 1;
      comment.current_user_like_id = action.like.id
      return nextState;
    case REMOVE_LIKE:
      comment = nextState[action.like.comment_id];
      comment.liked_by_current_user = false;
      comment.likes -= 1;
      return nextState;
    default:
      return state;
  }
};

export default commentsReducer;
