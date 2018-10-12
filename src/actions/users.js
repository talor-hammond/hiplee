// httpClient:
import request from 'superagent'

// relative url for our api:
const url = 'https://reqres.in/api/users'

// String constants:
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'

// For fetching all users:
export function fetchUsers() {
    return dispatch => {
        return request
            .get(url)
            .then(res => {
                const users = res.body.data // Just grabbing the user data out of of the res.body obj

                dispatch(receiveUsers(users)) // ...then feed the users back into client-side state
            })
            .catch(err => {
                if (err) console.log(err)
            })
    }
}

function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}


// For fetching a particular user by an id:
export function fetchUserById(id) {
    return dispatch => {
        return request
            .get(`${url}/${id}`)
            .then(res => {
                const user = res.body.data

                dispatch(receiveUser(user))
            })
            .catch(err => {
                if (err) console.log(err)
            })
    }
}

function receiveUser(user) {
    console.log(`user being fed back into state: ${user}`)

    return {
        type: RECEIVE_USER,
        user
    }
}