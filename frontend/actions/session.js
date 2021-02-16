import * as APIUtil from "../utils/session";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

export const removeErrors = () => (dispatch) => {
  return dispatch(clearErrors());
};

export const createNewUser = (formUser) => (dispatch) =>
  APIUtil.signup(formUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const login = (formUser) => (dispatch) =>
  APIUtil.login(formUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()));
