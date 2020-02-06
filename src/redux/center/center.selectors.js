import {
  createSelector
} from 'reselect';

const selectCenter = state => state.center;

export const selectCenters = createSelector(
  [selectCenter],
  (center) => center.centers
);