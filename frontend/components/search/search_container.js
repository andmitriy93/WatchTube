import { connect } from 'react-redux';
import SearchBar from './search';
import { fetchVideos } from "../../actions/video_actions";
import { withRouter } from "react-router-dom";

const mSTP = state => {
  return {
    videos: Object.values(state.entities.videos),
  }
}

const mDTP = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(mSTP, mDTP)(SearchBar)