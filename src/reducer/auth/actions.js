import {fromJS} from 'immutable';
import * as types from './actionTypes';

// FETCH ME
export const fetchMeRequest = () => ({
  type: types.FETCH_ME_REQUEST
});
export const fetchMeSuccess = (data) => ({
  type: types.FETCH_ME_SUCCESS,
  payload: fromJS(data)
});
export const fetchMeError = () => ({
  type: types.FETCH_ME_ERROR,
});

// LOGIN REQUEST
export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});
export const loginRequest = (data) => ({
  type: types.LOGIN_REQUEST,
  payload: fromJS(data),
});
export const loginError = () => ({
  type: types.LOGIN_ERROR,
});

// LOGOUT REQUEST
export const logoutRequest = (data) => ({
  type: types.LOGOUT_REQUEST,
  payload: fromJS(data)
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logoutError = () => ({
  type: types.LOGOUT_ERROR,
});

export const emailCheckRequest = (data) => ({
  type: types.EMAIL_CHECK_REQUEST,
  payload: fromJS(data)
});

export const emailCheckSuccess = () => ({
  type: types.EMAIL_CHECK_SUCCESS,
});

export const emailCheckError = () => ({
  type: types.EMAIL_CHECK_ERROR,
});

