import * as types from './actionTypes';
import {combineReducers} from 'redux-immutable';

const language = (state = 'zh', action) => {
  switch (action.type) {
    case types.TOGGLE_LANGUAGE_REQUEST:
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers({
  language,
});


export default reducer;