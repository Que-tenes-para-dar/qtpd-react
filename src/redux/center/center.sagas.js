import {
  all,
  call,
  put,
  takeEvery
} from 'redux-saga/effects';

import {
  fetchCentersSuccess,
  fetchCentersFailure,
} from './center.actions';

import CenterActionTypes from './center.types';
import {
  defaultFilters
} from '../../utils/constants.utils';

export function* fetchCentersFilteredAsync({
  payload = defaultFilters
}) {
  const {
    donationTypes,
    location,
    maxDistance
  } = payload;
  try {
    // TODO: use axios
    // TODO: move this request to api/center.api
    const donationTypesIdsCsv = donationTypes.map(d => d._id).join(',');
    const urlRequest = `https://qtpd-api.herokuapp.com/centers/filtered/
      ${location.latitude}/${location.longitude}/
      ${maxDistance}/${donationTypesIdsCsv}`;
    const json = yield fetch(urlRequest)
      .then(response => response.json());
    yield put(fetchCentersSuccess(json.data));

  } catch (error) {
    yield put(fetchCentersFailure(error.message));
  }
}

export function* watchFetchCentersFilteredStart() {
  yield takeEvery(CenterActionTypes.FETCH_CENTERS_FILTERED_START, fetchCentersFilteredAsync);
}

export function* centerSagas() {
  yield all([call(watchFetchCentersFilteredStart)]);
}