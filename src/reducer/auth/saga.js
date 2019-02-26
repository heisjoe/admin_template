import * as types from './actionTypes';
import {put, call, takeLatest} from 'redux-saga/effects'
import {message} from 'antd';
import {
  fetchMeSuccess,
  fetchMeError,
  loginSuccess,
  loginError,
  //
  logoutError,
  logoutSuccess,
  //
  emailCheckSuccess,
  emailCheckError,
} from './actions';
import http from '../../utils/http';
import {TOKEN_NAME} from '../../constants/app';

// fetch me
function* fetchmeRequestHandle() {
  try {
    const response = yield call(http.post, '/me');
    yield put(fetchMeSuccess(response.data.data))
  } catch (e) {
    yield put(fetchMeError())
  }
}

export function* watchFetchMeRequest() {
  yield takeLatest(types.FETCH_ME_REQUEST, fetchmeRequestHandle)
}

// logout
function* logoutRequestHandle() {
  try {
    const response = yield call(http.post, '/logout');
    message.success(response.data.message);
    // 1. remove token
    localStorage.removeItem(TOKEN_NAME);
    // 2.
    yield put(logoutSuccess());
    // 3.
  } catch (e) {
    message.error(e.response.data.message);
    yield put(logoutError())
  }
}

export function* watchLogoutRequest() {
  yield takeLatest(types.LOGOUT_REQUEST, logoutRequestHandle);
}

// login
function* loginRequestHandle(action) {
  const {data, onSuccess} = action.payload.toJS();
  try {
    const response = yield call(http.post, '/login', data);
    // 1.
    const {token} = response.data.data;
    localStorage.setItem(TOKEN_NAME, token);
    // 2.
    message.success(response.data.message);
    // 3.
    yield call(onSuccess);
    // 4.
    yield put(loginSuccess());
  } catch (e) {
    message.error(e.response.data.message);
    yield put(loginError())
  }
}

export function* watchLoginRequest() {
  yield takeLatest(types.LOGIN_REQUEST, loginRequestHandle);
}

function* emailCheckRequestHandle(action) {
  try {
    const {data, onSuccess} = action.payload.toJS();
    const response = yield call(http.post, '/emailCheck', {email: data});
    yield put(emailCheckSuccess());
    onSuccess && (yield call(onSuccess, response.data.data.exists));
  } catch (e) {
    message.error(e.response.data.message);
    yield put(emailCheckError())
  }
}

export function* watchEmailCheckRequest() {
  yield takeLatest(types.EMAIL_CHECK_REQUEST, emailCheckRequestHandle);
}