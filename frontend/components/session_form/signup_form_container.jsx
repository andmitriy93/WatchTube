import React from "react";
import { connect } from "react-redux";
import { createNewUser, removeErrors } from "../../actions/session";
import Signup from "./signup";

const mSTP = (state) => {
  return {
    errors: state.errors.session

  }
};

const mDTP = (dispatch) => ({
  createNewUser: (formUser) => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(removeErrors()),
});

export default connect(mSTP, mDTP)(Signup);
