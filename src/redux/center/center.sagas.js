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

export function* fetchCentersAsync() {
  try {
    // TODO: use axios
    // TODO: move this to a new service
    const json = yield fetch('https://qtpd-api.herokuapp.com/centers')
      .then(response => response.json());

    yield put(fetchCentersSuccess(json.data));

  } catch (error) {
    yield put(fetchCentersFailure(error.message));
  }
}

export function* fetchCentersStart() {
  yield takeEvery(CenterActionTypes.FETCH_CENTERS_START, fetchCentersAsync);
}

export function* centerSagas() {
  yield all([call(fetchCentersStart)]);
}