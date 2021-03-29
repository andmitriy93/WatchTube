import React from "react";
import { Link, withRouter } from "react-router-dom";

class VideoIndexItem extends React.Component {
  playVideo(e) {
    // console.log(e.target.play());
    // e.target.currentTime = 0
    e.target.play();
  }

  stopVideo(e) {
    // console.log(e.target);
    e.target.pause();
    e.target.currentTime = 0;
  }

  render() {
    // console.log(this.props.video);
    if (!this.props.video) return null;
    return (
      <div
        className='video-wrapper'
        onClick={() =>
          this.props.history.push(`/videos/${this.props.video.id}`)
        }
      >
        <div className='video-container'>
          <video
            className='video-player'
            src={this.props.video.video_url}
            width='300'
            controlsList='nodownload'
            muted='muted'
            autoPlay={false}
            preload='auto'
            onMouseOver={this.playVideo}
            onMouseOut={this.stopVideo}
          />
          <p className='desc'>
            {this.props.video.id} {this.props.video.title}
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoIndexItem);
