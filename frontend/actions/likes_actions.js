import { createLike, deleteLike } from "../utils/likes_util";

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
  return createLike(commentId) 
    .then(like => dispatch(receiveLike(like)))
}

export const deleteLike = (likeId) => {
  return deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)))
}