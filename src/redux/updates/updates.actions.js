import UpdatesActionTypes from './updates.types';

export const fetchUpdatesStart = () => ({
	type: UpdatesActionTypes.FETCH_UPDATES_START,
})

export const fetchUpdatesSuccess = updates => ({
	type: UpdatesActionTypes.FETCH_UPDATES_SUCCESS,
	payload: updates
})

export const fetchUpdatesFailure = errorMessage => ({
	type: UpdatesActionTypes.FETCH_UPDATES_FAILURE,
	payload: errorMessage
})