import React from "react";
import { connect } from "react-redux";
import { createNewUser, removeErrors } from "../../actions/session";
import Signup from "./signup";

const mSTP = (state) => ({
  // errors: Object.values(state.errors.session),
  errors: 
});

const mDTP = (dispatch) => ({
  createNewUser: (formUser) => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(removeErrors()),
});

export default connect(mSTP, mDTP)(Signup);
