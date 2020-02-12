import CenterActionTypes from './center.types';

export const fetchCentersSuccess = centers => ({
  type: CenterActionTypes.FETCH_CENTERS_SUCCESS,
  payload: centers
});

export const fetchCentersFailure = errorMessage => ({
  type: CenterActionTypes.FETCH_CENTERS_FAILURE,
  payload: errorMessage
});

export const fetchCentersFilteredStart = appliedFilters => ({
  type: CenterActionTypes.FETCH_CENTERS_FILTERED_START,
  payload: appliedFilters
});