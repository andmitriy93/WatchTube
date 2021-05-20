import React from "react";
import { Link, withRouter } from "react-router-dom";

class VideoIndexItem extends React.Component {
  playVideo(e) {
    e.target.play();
  }

  stopVideo(e) {
    e.target.pause();
    e.target.currentTime = 0;
  }

  render() {
    if (!this.props.video) return null;
    return (
      <div className='video-wrapper'>
        <div
          className='video-container'
          onClick={() =>
            this.props.history.push(`/videos/${this.props.video.id}`)
          }
        >
          {/* <div className="video-show-player-cont"> */}
            <video
              className='video-player'
              src={this.props.video.video_url}
              controlsList='nodownload'
              muted='muted'
              autoPlay={false}
              preload='auto'
              onMouseOver={this.playVideo}
              onMouseOut={this.stopVideo}
            />
          {/* </div> */}
          {/* <div className='video-desc-container'> */}
            <p className='desc'>
              {/* {this.props.video.id} {this.props.video.title} */}
              {this.props.video.title}
            </p>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default withRouter(VideoIndexItem);
