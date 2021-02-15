import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="home">
        <SideBarContainer />
      </div>
    )
  }
}

export default Home;