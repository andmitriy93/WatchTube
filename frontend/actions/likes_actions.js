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

const removeLike = (like) => {
  return {
    type: REMOVE_LIKE,
    like,
  };
};

export const fetchLikes = () => (dispatch) => {
  return APIlikes.fetchLikes().then((likes) => dispatch(receiveLikes(likes)));
};

export const likeComment = (commentId) => (dispatch) => {
  return APIlikes.likeToComment(commentId).then((like) =>
  { 
    return dispatch(receiveLike(like))
  }
  );
};

export const unLikeComment = (likeId) => (dispatch) => {
  return APIlikes.deleteLikeFromComment(likeId).then((like) =>
    dispatch(removeLike(like))
  );
};

