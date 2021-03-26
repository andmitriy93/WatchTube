import React from "react";
import { connect } from "react-redux";
import Comments from "./comments_index";
import {
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
} from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
  debugger
  return {
    currentUser: state.session.currentUser.id,
    currentVideo: state.videoId,
    comments: Object.values(state.entities.comments)
  };
};

const mDTP = (dispatch) => {
  return {
    // fetchComments: (userId) => dispatch(fetchComments(userId)),
    fetchComments: () => dispatch(fetchComments()),
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};

export default connect(mSTP, mDTP)(Comments);
