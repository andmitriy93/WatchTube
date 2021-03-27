import React from "react";
import { Link } from "react-router-dom";

class VideoIndexItem extends React.Component {
  render() {
    if (!this.props.video) return null
    console.log(this.props.video)

    return (
      <div className="video-wrapper">
        <div className="video-container">
          <video
            className="video-player"
            src={this.props.video.video_url}
            width="300"
          />
          {console.log(this.props.video)}
          <Link to={`/videos/${this.props.video.id}`}>
          <p className="desc">
            {this.props.video.id} {this.props.video.title}
          </p> </Link>
          {/* <p className="desc">{props.video.id} {props.video.title}</p> */}
        </div>
      </div>
    );
  }
}

export default VideoIndexItem;
