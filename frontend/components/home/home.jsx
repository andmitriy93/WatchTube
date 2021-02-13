import React from 'react';
import SideBar from '../sidebar/sidebar';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="home">
        <SideBar />
      </div>
    )
  }
}

export default Home;