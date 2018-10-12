// Actions:
import { RECEIVE_USER } from '../actions/users'

const initialState = { // our 'default' state for a particular user obj.
    userSelected: false, 
    user: {}
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_USER:
            return {
                userSelected: true,
                user: action.user
            }
        default:
            return state
    }
}