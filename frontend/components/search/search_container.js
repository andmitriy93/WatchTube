import { connect } from 'react-redux';
import SearchBar from './search';
import { searchVideos } from "../../actions/video_actions";
import { withRouter } from "react-router-dom";

const mSTP = state => {
  return {
    videos: Object.values(state.entities.videos)
  }
}

const mDTP = dispatch => {
  return {
    searchVideos: (videoTitle) => dispatch(searchVideos(videoTitle))
  }
}

export default connect(mSTP, mDTP)(SearchBar)