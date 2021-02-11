import { User, UserActionType, GET_USER_REQUEST, GET_USER_SUCCESS, CREATE_USER_REQUEST } from '../types/userTypes';

export function getUserRequest(): UserActionType {
    return {
        type: GET_USER_REQUEST
    }
}

export function getUserSuccess(usersList: User[]): UserActionType {
    return {
        type: GET_USER_SUCCESS,
        payload: usersList
    }
}

export function createUserRequest(user: User): UserActionType {
    return {
        type: CREATE_USER_REQUEST,
        payload: user
    }
}