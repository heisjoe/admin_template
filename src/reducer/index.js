import {combineReducers} from 'redux-immutable';


import app from './app';
import auth from './auth';
import users from '../pages/Users/reducer';

const rootReducer = combineReducers({
	app,
	auth,
	//
	users,
});

export default rootReducer;
