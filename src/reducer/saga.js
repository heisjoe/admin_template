import {all, fork} from 'redux-saga/effects';

import * as app from './app/saga';
import * as auth from './auth/saga';

import * as Users from '../pages/Users/reducer/saga';

export default function* rootSaga() {
	yield all([
		// commone
		...Object.values(app),
		...Object.values(auth),
		// pages
		...Object.values(Users),
		//
	].map(fork))
}
