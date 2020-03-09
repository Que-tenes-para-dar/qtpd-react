import {
  all,
  call,
  put,
  takeEvery
} from 'redux-saga/effects';

import {
  fetchDonationTypesSuccess,
  fetchDonationTypesFailure
} from './filter.actions';

import FilterActionTypes from './filter.types';

export function* fetchDonationTypesAsync() {
  try {
    const json = yield fetch('https://qtpd-api.herokuapp.com/donationTypes')
      .then(response => response.json());
    yield put(fetchDonationTypesSuccess(json.data));
  } catch (error) {
    yield put(fetchDonationTypesFailure(`Error while fetching the filters: ${error.message}`));
  }
}

export function* watchFetchDonationTypesStart() {
  yield takeEvery(FilterActionTypes.FETCH_DONATION_TYPES_START, fetchDonationTypesAsync);
}

export function* filterSagas() {
  yield all([call(watchFetchDonationTypesStart)]);
}