import {
  createSelector
} from 'reselect';

const selectFilter = state => state.filter;

export const selectAllFilters = createSelector(
  [selectFilter],
  filter => filter.allFilters
);

export const selectSelectedFilters = createSelector(
  [selectFilter],
  filter => filter.selectedFilters
);