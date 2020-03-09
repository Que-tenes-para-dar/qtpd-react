import FilterActionTypes from './filter.types';

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
