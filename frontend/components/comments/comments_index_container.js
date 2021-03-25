import React from "react";
import { connect } from "react-redux";
import Comments from "./comments_index";
import {
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
} from "../../actions/comment_actions";

const mSTP = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentVideo: state.videoId,
    comments: state.entities.comments,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};

export default connect(mSTP, mDTP)(Comments);
