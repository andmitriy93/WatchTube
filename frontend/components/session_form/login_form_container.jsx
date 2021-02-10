import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session';

const mSTP = state => {
    return {
        formType: 'login',

    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export const connect(mSTP, mDTP)(SessionForm);