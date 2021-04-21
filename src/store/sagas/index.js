import {fork} from 'redux-saga/effects';
import authSaga from './auth';
import visitsSaga from './visits';
import visitDetailsSaga from './visitDetails';
import userSaga from './user';
export default function* rootSaga() {
    yield fork(authSaga);
    yield fork(visitsSaga);
    yield fork(visitDetailsSaga);
    yield fork(userSaga);
}
