import * as CommentAPIUtil from "../utils/comments_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  };
};

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId,
  };
};


export const fetchComments = () => (dispatch) => {
  return CommentAPIUtil.fetchComments().then((comments) =>
    dispatch(receiveComments(comments))
  );
};

export const fetchComment = (commentId) => (dispatch) => {
  return CommentAPIUtil.fetchComment(commentId).then((comment) =>
    dispatch(receiveComment(comment))
  );
};

export const createComment = (comment) => (dispatch) => {
  return CommentAPIUtil.createComment(comment).then((comment) =>
    dispatch(receiveComment(comment))
  );
};

export const updateComment = (comment) => (dispatch) => {
  return CommentAPIUtil.updateComment(comment).then((comment) =>
    dispatch(receiveComment(comment))
  );
};

export const deleteComment = (commentId) => (dispatch) => {
  return CommentAPIUtil.deleteComment(commentId).then(() =>
    dispatch(removeComment(commentId))
  );
};

