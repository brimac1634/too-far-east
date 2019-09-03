import NavActionTypes from './nav.types';

export const scrollToSection = section => ({
	type: NavActionTypes.SCROLL_TO_SECTION,
	payload: section
})