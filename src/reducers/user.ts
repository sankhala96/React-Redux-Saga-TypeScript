import { UserState, UserActionType, GET_USER_SUCCESS } from '../types/userTypes';

const initialState : UserState = {
    users: []
}

export default function users(state = initialState, action: UserActionType): UserState {
    switch(action.type) {
            case GET_USER_SUCCESS:
                return { ...state, users: action.payload }
            default:
                return state
    }
}