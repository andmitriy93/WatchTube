import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session";
import { Link } from "react-router-dom";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
