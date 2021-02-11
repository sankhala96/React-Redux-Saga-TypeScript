import { call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from '../types/userTypes';
import * as actions from '../actions/user';
import * as api from '../api/user';

function* getUsers() {
    try {
        const result = yield call(api.getUsers)
        yield put(actions.getUserSuccess(result.data.data))
    } catch (error) {
        
    }
}

function* watchGetUserRequest() {
    yield takeEvery(actionTypes.GET_USER_REQUEST, getUsers)
}

function* createUser(action: actionTypes.CreateUserRequestAction) {
    try {
        yield call(api.createUser, action.payload)
        
    } catch (error) {
        
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(actionTypes.CREATE_USER_REQUEST, createUser)
}

const UserSagas =  [
    fork(watchGetUserRequest),
    fork(watchCreateUserRequest)
]

export default UserSagas;