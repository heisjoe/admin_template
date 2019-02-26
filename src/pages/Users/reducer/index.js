import {combineReducers} from 'redux-immutable';
import {Map, List} from 'immutable';
import * as types from './actionTypes';

export const REDUX_KEY = "users";

const INIT_FILTERS = Map({
  id: '',
  //
  current: 1,
  pageSize: 15,
});

const filters = (state = INIT_FILTERS, action) => {
  switch (action.type) {
    case types.CHANGE_FILTERS:
      return state.merge(action.payload);
    default:
      return state;
  }
};

const INIT_DATA = Map({
  loading: false,
  items: List(),
  total: 0,
});

const data = (state = INIT_DATA, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.CHANGE_FILTERS:
      return state.set('loading', true);
    case types.FETCH_ERROR:
      return state.set('loading', false);
    case types.FETCH_SUCCESS:
      return state.set('loading', false)
        .set('total', action.payload.get('total'))
        .set('items', action.payload.get('items'));
    default:
      return state;
  }
};

const reducer = combineReducers({
  data,
  filters,
});

export default reducer;
