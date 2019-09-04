import NavActionTypes from './nav.types';

const INITIAL_STATE = {
	section: null
}

const navReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NavActionTypes.SCROLL_TO_SECTION:
			return {
				...state,
				section: action.payload
			}
		default:
			return state
	}
}

export default navReducer;