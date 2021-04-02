import * as APIlikes from "../utils/likes_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = (like) => {
  // debugger
  return {
    type: RECEIVE_LIKE,
    like,
  };
};

const removeLike = (likeId) => {
  // debugger
  return {
    type: REMOVE_LIKE,
    likeId,
  };
};

export const createLike = (commentId) => (dispatch) => {
  return APIlikes.createLike(commentId).then((like) =>
    dispatch(receiveLike(like))
  );
};

export const deleteLike = (commentId, likeId) => (dispatch) => {
  return APIlikes.deleteLike(commentId, likeId).then(() =>
    dispatch(removeLike(likeId))
  );
};
