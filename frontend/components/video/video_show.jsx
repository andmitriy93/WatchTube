import React from "react";
import { withRouter } from "react-router";
import NavBar from "../nav_bar/nav_bar_container";
import SideBar from "../sidebar/sidebar_container";
import CommentsForm from "../comments/comments_form_container";
import Comments from "../comments/comments_index_container";
import Sidebar from '../sidebar/sidebar_container';
import VideoIndexItem from './video_index_item';

class VideoShow extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
    this.props.fetchVideos()
  }

  render() {
    if (!this.props.video) return null;

    let videos = this.props.videos.map(video => <VideoIndexItem video={video} key={video.id} />)

    return (
      <div className='video-show-outter'>
        {/* <div className="video-show-navbar"> */}
          <NavBar />
        {/* </div> */}
        <div className="video-show-sidebar">
          <Sidebar />
          <div className="video-show-content">
            <video
              className='video-show-player'
              src={this.props.video.video_url}
              controlsList='nodownload'
              controls
            />
            <p className="video-show-desc">
              {this.props.video.title}
            </p>
            <CommentsForm />
            <Comments videoId={this.props.videoId} />
          </div>
          <div className="video-show-sugg">
            {videos}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoShow);
