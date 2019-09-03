import { createSelector } from 'reselect';

const selectNav = state => state.nav;

export const selectSection = createSelector(
	[selectNav],
	nav => nav.section
)