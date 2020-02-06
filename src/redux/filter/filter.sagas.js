import {
  all,
  call,
  put,
  takeEvery
} from 'redux-saga/effects';

import {
  fetchFiltersSuccess,
  fetchFiltersFailure
} from './filter.actions';

import FilterActionTypes from './filter.types';

export function* fetchFiltersAsync() {
  try {
    const json = yield fetch('https://qtpd-api.herokuapp.com/donationTypes')
      .then(response => response.json());
    yield put(fetchFiltersSuccess(json.data));
  } catch (error) {
    yield put(fetchFiltersFailure(`Error while fetching the filters: ${error.message}`));
  }
}

export function* fetchFiltersStart() {
  yield takeEvery(FilterActionTypes.FETCH_FILTERS_START, fetchFiltersAsync);
}

export function* filterSagas() {
  yield all([call(fetchFiltersStart)]);
}