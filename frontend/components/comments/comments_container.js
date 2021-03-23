import React from 'react';
import { connect } from 'react-redux';
import Comments from './comments_component'


const mSTP = state => {
  return {
    currentUser: state.session.currentUser,
    
  }
}

const mDTP = dispatch => {
  return {

  }
}

export default connect(mSTP, mDTP)(Comments)