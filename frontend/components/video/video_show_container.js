import React from 'react'
import { connect } from 'react-redux'
import { fetchVideo, fetchVideos } from '../../actions/video_actions'
import VideoShow from './video_show'
import Comments from '../comments/comments_index'


const mSTP = (state, ownProps) => {
  return {
    videoId: parseInt(ownProps.match.params.videoId),
    currentUser: state.session.currentUser,
    video: state.entities.videos[parseInt(ownProps.match.params.videoId)],
    videos: Object.values(state.entities.videos),
    // videoComments: state.entities.videos[parseInt(ownProps.match.params.videoId)].videoComments
  };
}

const mDTP = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
  }
}

export default connect(mSTP, mDTP)(VideoShow)