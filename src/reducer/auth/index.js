import {Map} from 'immutable';
import * as types from './actionTypes';
import {TOKEN_NAME} from '../../constants/app';

const INIT_AUTH = Map({
  loading: false,
  checkLoading: false,
  isLogin: !!localStorage.getItem(TOKEN_NAME),
  user: Map(),
});

const reducer = (state = INIT_AUTH, action) => {
  switch (action.type) {
    // email check
    case types.EMAIL_CHECK_REQUEST:
      return state.set('checkLoading', true);
    case types.EMAIL_CHECK_ERROR:
    case types.EMAIL_CHECK_SUCCESS:
      return state.set('checkLoading', false);
    //
    case types.LOGIN_SUCCESS:
      return state
        .set('isLogin', true)
        .set('loading', false);
    case types.FETCH_ME_REQUEST:
    case types.LOGIN_REQUEST:
    case types.LOGOUT_REQUEST:
      return state.set('loading', true);
    case types.FETCH_ME_SUCCESS:
      return state
        .set('loading', false)
        .set('user', action.payload);

    case types.FETCH_ME_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGOUT_ERROR:
      return state.set('loading', false);
    case types.LOGOUT_SUCCESS:
      return state
        .set('isLogin', false)
        .set('loading', false);
    default:
      return state;
  }
};

export default reducer;
