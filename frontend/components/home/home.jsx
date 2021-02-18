import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';
import VideoIndexContainer from '../video/video_index_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="home">
        <SideBarContainer />
        <VideoIndexContainer />
      </div>
    )
  }
}

export default Home;