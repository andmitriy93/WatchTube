import React from "react";
import { connect } from "react-redux";
import { login, removeErrors } from "../../actions/session";
import Login from "./login";

const mSTP = (state) => {
  return {
    errors: Object.values(state.errors.session),
  };
};

const mDTP = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
  clearErrors: () => dispatch(removeErrors()),
});

export default connect(mSTP, mDTP)(Login);
