import React from "react";
import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import Signup from "./signup";

const mSTP = (state) => ({
  errors: Object.values(state.errors.session),
});

const mDTP = (dispatch) => ({
  createNewUser: (formUser) => dispatch(createNewUser(formUser)),
});

export default connect(mSTP, mDTP)(Signup);
