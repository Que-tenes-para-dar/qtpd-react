import {
  all,
  call
} from 'redux-saga/effects';

import {
  centerSagas
} from './center/center.sagas';
import {
  filterSagas
} from './filter/filter.sagas';


export default function* rootSaga() {
  yield all([
    call(centerSagas),
    call(filterSagas)
  ]);
}