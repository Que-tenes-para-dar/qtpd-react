import {
  takeEvery,
  call,
  put,
  all
} from 'redux-saga/effects';

import {
  fetchCentersSuccess,
  fetchCentersFailure
} from './organization.actions';

import OrganizationActionTypes from './organization.types';

export function* fetchCentersAsync() {
  try {
    const centers = yield fetch('/api - centers');

    yield put(fetchCentersSuccess(centers));
  } catch (error) {
    yield put(fetchCentersFailure(error.message));
  }
}

export function* fetchCentersStart() {
  yield takeEvery(
    OrganizationActionTypes.FETCH_CENTERS_START,
    fetchCentersAsync
  );
}

export function* organizationSagas() {
  yield all([call(fetchCentersStart)]);
}