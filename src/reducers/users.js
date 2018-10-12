// Actions:
import { RECEIVE_USERS } from '../actions/users'

// TODO: Need a piece of state the tracks a particular selected user.

export default function users(state = [], action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return [...action.users]
        default:
            return state
    }
}