import * as types from './actionTypes';


export const toggleLanguageRequest = (data) => ({
  type: types.TOGGLE_LANGUAGE_REQUEST,
  payload: data
});

export const toggleLanguageSuccess = () => ({
  type: types.TOGGLE_LANGUAGE_SUCCESS,
});

export const toggleLanguageError = () => ({
  type: types.TOGGLE_LANGUAGE_ERROR,
});