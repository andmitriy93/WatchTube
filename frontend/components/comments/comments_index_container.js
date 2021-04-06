import React from "react";
import { connect } from "react-redux";
import Comments from "./comments_index";
import {
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
} from "../../actions/comment_actions";
import { likeComment, unLikeComment, fetchLikes } from '../../actions/likes_actions'

const mSTP = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentVideo: state.entities.videos,
    comments: Object.values(state.entities.comments),
    likes: Object.values(state.entities.likes)
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
    fetchLikes: () => dispatch(fetchLikes()),
    likeComment: like => dispatch(likeComment(like)),
    unLikeComment: likeId => dispatch(unLikeComment(likeId))
  };
};

export default connect(mSTP, mDTP)(Comments);
