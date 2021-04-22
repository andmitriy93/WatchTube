import React from "react";
import { withRouter } from "react-router";
import NavBar from "../nav_bar/nav_bar_container";
import SideBar from "../sidebar/sidebar_container";
import CommentsForm from "../comments/comments_form_container";
import Comments from "../comments/comments_index_container";
import Sidebar from '../sidebar/sidebar_container';

class VideoShow extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  render() {
    if (!this.props.video) return null;

    return (
      <div className='video-show-outter'>
        <NavBar />
        <div className="video-show-sidebar">
          <Sidebar />
          <div className="video-show-content">
            <video
              className='video-show-player'
              src={this.props.video.video_url}
              controlsList='nodownload'
              controls
            />
            <CommentsForm />
            <Comments videoId={this.props.videoId} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoShow);
