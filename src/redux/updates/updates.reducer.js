import UpdatesActionTypes from './updates.types';

const INITIAL_STATE = {
	updates: null,
	isFetching: false,
	errorMessage: undefined
}

const updatesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UpdatesActionTypes.FETCH_UPDATES_START:
			return {
				...state,
				isFetching: true
			}
		case UpdatesActionTypes.FETCH_UPDATES_SUCCESS:
			return {
				...state,
				isFetching: false,
				updates: action.payload
			}
		case UpdatesActionTypes.FETCH_UPDATES_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			}
		default:
			return state;
	}
}

export default updatesReducer;