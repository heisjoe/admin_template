import {takeLatest} from 'redux-saga/effects'
import * as types from './actionTypes';


function* toggleLanguageRequestHandle() {

}

export function* watchToggleLanguageRequestHandle() {
  yield takeLatest(types.TOGGLE_LANGUAGE_REQUEST, toggleLanguageRequestHandle);
}