import { createSelector } from 'reselect'

const selectUpdate = state => state.updates;

export const selectUpdates = createSelector(
	[selectUpdate],
	updates => updates.updates
)

export const selectAreUpdatesFetching = createSelector(
	[selectUpdate],
	updates => updates.isFetching
)
