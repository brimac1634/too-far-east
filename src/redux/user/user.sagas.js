import { takeLatest, put, all, call } from 'redux-saga/effects';

import { 
	auth, 
	googleProvider, 
	createUserProfileDocument,
	getCurrentUser
} from '../../firebase/firebase.utils';

import UserActionTypes from './user.types';

import { 
	signInSuccess, 
	signInFailure, 
	signOutSuccess, 
	signOutFailure
} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth, otherData) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth, otherData);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })) 
	} catch (err) {
		yield put(signInFailure(err.message)) 
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password)
		yield getSnapshotFromUserAuth(user)
	} catch (err) {
		yield put(signInFailure(err.message))
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) { 
			yield put(signOutSuccess()) 
		} else { 
			yield getSnapshotFromUserAuth(userAuth) 
		}
	} catch (err) {
		yield put(signInFailure(err.message))
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (err) {
		yield put(signOutFailure(err.message));
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
	yield all([
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart)
	])
}