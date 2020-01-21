import CenterActionTypes from './organization.types';

export const fetchCentersStart = () => ({
  type: CenterActionTypes.FETCH_CENTERS_START,
});

export const fetchCentersSuccess = centers => ({
  type: CenterActionTypes.FETCH_CENTERS_SUCCESS,
  payload: centers
});

export const fetchCentersFailure = errorMessage => ({
  type: CenterActionTypes.FETCH_CENTERS_FAILURE,
  payload: errorMessage
});

export const fetchCentersStartAsync = () => {
  return dispatch => {
    const centersRef = fetch('/centers');
    dispatch(fetchCentersStart());

    centersRef.get().then(centers => {
      dispatch(fetchCentersSuccess(centers));
    }).catch(error => dispatch(fetchCentersFailure(error.message)));
  }
}