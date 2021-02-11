import { all } from 'redux-saga/effects';
import UserSagas from './user';

export default function* rootSaga() {
    yield all([
        ...UserSagas
    ])
}