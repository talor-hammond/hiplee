// Actions:
import {
    RECEIVE_USERS,
    RECEIVE_USER
} from '../actions/users'

// TODO: Need a piece of state the tracks a particular selected user.
const initialState = {
    users: [],
    userSelected: false
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                users: action.users,
                userSelected: false
            }
        case RECEIVE_USER:
            return {
                users: action.user,
                userSelected: true
            }
        default:
            return state
    }
}