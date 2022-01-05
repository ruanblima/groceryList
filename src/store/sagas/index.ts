import { all, fork } from 'redux-saga/effects';

import categorySubject from '../ducks/categorySubject/sagas';

export default function* rootSaga() {
  yield all([fork(categorySubject)]);
}
