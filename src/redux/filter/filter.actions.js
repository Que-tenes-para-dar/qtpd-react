import FilterActionTypes from './filter.types';

export const toggleFilterIsApplied = filter => ({
  type: FilterActionTypes.TOGGLE_FILTER_IS_APPLIED,
  payload: filter
});

export const clearAllSelectedFilters = () => ({
  type: FilterActionTypes.CLEAR_ALL_SELECTED_FILTERS
});

export const fetchFiltersStart = () => ({
  type: FilterActionTypes.FETCH_FILTERS_START
});

export const fetchFiltersSuccess = filters => ({
  type: FilterActionTypes.FETCH_FILTERS_SUCCESS,
  payload: filters
});

export const fetchFiltersFailure = errorMessage => ({
  type: FilterActionTypes.FETCH_FILTERS_FAILURE,
  payload: errorMessage
});
