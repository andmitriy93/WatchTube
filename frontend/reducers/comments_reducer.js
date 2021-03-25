import {
  RECEIVE_COMMENTS,
  REMOVE_COMMENT,
  RECEIVE_COMMENT,
} from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.tipe) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case REMOVE_COMMENT:
      delete nextState[action.comment.id];
      return nextState;
    default:
      return state;
  }
};

export default commentsReducer;
