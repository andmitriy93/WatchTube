import React from "react";
import { withRouter } from "react-router";

class VideoShow extends React.Component {
  componentDidMount() {
    // this.props.fetchVideo(this.props.match.params.videoId)
    this.props.fetchVideos();
  }
  render() {
    if(!this.props.currentVideo) return null;
    return (
      <div>
        <h2>Test</h2>
        {/* {this.props.currentVideo} */}
        <video
          className="video-player"
          src={this.props.currentVideo.video_url}
          width="500"
          // autoPlay
        />
      </div>
    );
  }
}

export default VideoShow;
