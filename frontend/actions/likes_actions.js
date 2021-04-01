import * as APIlikes from "../utils/likes_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

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

export const createLike = (commentId) => {
  return APIlikes.createLike(commentId) 
    .then(like => dispatch(receiveLike(like)))
}

export const deleteLike = (commentId, likeId) => {
  return APIlikes.deleteLike(commentId, likeId)
    .then(() => dispatch(removeLike(likeId)))
}