import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, formatUpdates } from '../../firebase/firebase.utils';

import {
	fetchUpdatesSuccess,
	fetchUpdatesFailure
} from './updates.actions';

import UpdatesActionTypes from './updates.types';

export function* fetchUpdatesAsync() {
	try {
		const updatesRef = firestore.collection('updates');
		const snapshot = yield updatesRef.orderBy('date', 'desc').limit(8).get();
		let updates = yield formatUpdates(snapshot);
		updates = updates.length ? updates : null;
		yield put(fetchUpdatesSuccess(updates));
	} catch (err) {
		yield put(fetchUpdatesFailure(err.message))
	}
}

export function* fetchUpdatesStart() {
	yield takeLatest(
		UpdatesActionTypes.FETCH_UPDATES_START, 
		fetchUpdatesAsync
	)
}

export function* updatesSagas() {
	yield all([call(fetchUpdatesStart)])
}