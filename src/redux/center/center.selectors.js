import {
  createSelector
} from 'reselect';

const selectCenter = state => state.center;

export const selectCurrentCenters = createSelector(
  [selectCenter],
  (center) => center.currentCenters
);