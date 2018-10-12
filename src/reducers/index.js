import { combineReducers } from 'redux'

// Reducers:
import users from './users'
import user from './user'

export default combineReducers({
    users,
    user
})