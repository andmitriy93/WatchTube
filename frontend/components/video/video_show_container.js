import React from 'react'
import { connect } from 'react-redux'
import { fetchVideo, fetchVideos } from '../../actions/video_actions'
import VideoShow from './video_show'


const mSTP = (state, ownProps) => {
  return {
    videoId: ownProps.match.params.videoId,
    currentUser: state.session.currentUser,
    currentVideo: state.entities.videos[ownProps.match.params.videoId]
  };
}

const mDTP = dispatch => {
  return {
    // fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(mSTP, mDTP)(VideoShow)