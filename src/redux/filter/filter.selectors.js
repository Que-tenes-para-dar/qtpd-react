import {
  createSelector
} from 'reselect';

const selectFilter = state => state.filter;

export const selectAllDonationTypes = createSelector(
  [selectFilter],
  filter => filter.allDonationTypes
);