import * as APIlikes from "../utils/likes_util";

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = (likes) => {
  return {
    type: RECEIVE_LIKES,
    likes,
  };
};

const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like,
  };
};

const removeLike = (likeId) => {
  return {
    type: REMOVE_LIKE,
    likeId,
  };
};

export const fetchLikes = (commentId) => (dispatch) => {
  return APIlikes.fetchLikes(commentId).then((likes) => dispatch(receiveLikes(likes)));
};

export const likeComment = (like) => (dispatch) => {
  return APIlikes.likeToComment(like).then((comment) =>
    dispatch(receiveLike(comment))
  );
};

export const unLikeComment = (likeId) => (dispatch) => {
  return APIlikes.deleteLikeFromComment(likeId).then(() =>
    dispatch(removeLike(likeId))
  );
};

