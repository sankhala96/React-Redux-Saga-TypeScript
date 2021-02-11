export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';

export interface User {
    id: string,
    firstName: string,
    lastName: string
}

export interface UserState {
    users: User[];
}

interface GetUsersRequestAction {
    type: typeof GET_USER_REQUEST
}

interface GetUsersSuccessAction {
    type: typeof GET_USER_SUCCESS,
    payload: User[]
}

export interface CreateUserRequestAction {
    type: typeof CREATE_USER_REQUEST,
    payload: User
}

export type UserActionType = GetUsersRequestAction | GetUsersSuccessAction | CreateUserRequestAction