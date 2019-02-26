import * as types from './actionTypes';
import {put, call, select, takeLatest} from 'redux-saga/effects'
import {
  fetchSuccess,
  fetchError,
} from './actions';
import http from '../../../utils/http';
import {REDUX_KEY} from './index';

// fetch list
const fetchUrl = "/userList";

function* fetchRequestHandle() {
  try {
    const filters = yield select(state => state.getIn([REDUX_KEY, 'filters']).toObject());
    const response = yield call(http.post, fetchUrl, {filters});
    const data = response.data.data;
    yield put(fetchSuccess(data))
  } catch (e) {
    yield put(fetchError())
  }
}

export function* watchFetchListRequest() {
  yield takeLatest(types.FETCH_REQUEST, fetchRequestHandle);
  yield takeLatest(types.CHANGE_FILTERS, fetchRequestHandle);
}
