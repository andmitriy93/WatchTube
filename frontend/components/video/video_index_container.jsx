import { connect } from "react-redux";
import { fetchVideos } from "../../actions/video_actions";
import VideoIndex from "./video_index";
import { withRouter } from "react-router-dom";

const mSTP = (state) => {
  return {
    videos: Object.values(state.entities.videos),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
  };
};

export default withRouter(connect(mSTP, mDTP)(VideoIndex));
