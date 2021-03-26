import React from "react";
import { withRouter } from "react-router";
import NavBar from '../nav_bar/nav_bar_container';
import SideBar from '../sidebar/sidebar_container';
import CommentsForm from '../comments/comments_form_container' 

class VideoShow extends React.Component {
  componentDidMount() {
    // this.props.fetchVideo(this.props.match.params.videoId)
    this.props.fetchVideos();
  }

  
  render() {
    if(!this.props.currentVideo) return null;
    return (
      <div className="video-show-outter">
        <NavBar />
        <video
          className="video-show-player"
          src={this.props.currentVideo.video_url}
          controls
        />
        <CommentsForm />
      </div>
    );
  }
}

export default withRouter(VideoShow);
