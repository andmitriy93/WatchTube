import React from "react";
import { connect } from "react-redux";
import Comments from "./comments_index";
import {
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
  likeComment,
  unLikeComment

} from "../../actions/comment_actions";
// import { createLike, deleteLike } from '../../actions/likes_actions'

const mSTP = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentVideo: state.entities.videos,
    comments: Object.values(state.entities.comments),
    // likes: Object.values(state.entities.likes)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    fetchComment: (commentId) => dispatch(fetchComment(commentId)),
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    createLike: (commentId) => dispatch(createLike(commentId)),
    dislike: (commentId, likeId) => dispatch(deleteLike(commentId, likeId)),
    likeComment: id => dispatch(likeComment(id)),
    unLikeComment: id => dispatch(unLikeComment(id))
  };
};

export default connect(mSTP, mDTP)(Comments);
