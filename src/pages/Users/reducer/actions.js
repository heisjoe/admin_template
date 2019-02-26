import * as types from './actionTypes';
import {fromJS} from 'immutable';

// filters
export const changeFilters = (data) => ({
  type: types.CHANGE_FILTERS,
  payload: fromJS(data),
});

// list
export const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

export const fetchSuccess = (data) => ({
  type: types.FETCH_SUCCESS,
  payload: fromJS(data),
});

export const fetchError = () => ({
  type: types.FETCH_ERROR,
});
