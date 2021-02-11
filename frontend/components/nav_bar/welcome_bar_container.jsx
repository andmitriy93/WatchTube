import React from "react";
import { connect } from "react-redux";
import WelcomeBar from "./welcome_bar";

const mSTP = (state) => ({
  user: state.session.currentUser,
});

export default connect(mSTP)(WelcomeBar);
