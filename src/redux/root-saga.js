import {
  all,
  call
} from 'redux-saga/effects';

import {
  organizationSagas
} from './organization/organization.sagas';

export default function* rootSaga() {
  yield all([
    call(organizationSagas)
  ]);
}