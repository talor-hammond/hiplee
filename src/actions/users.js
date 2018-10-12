// httpClient:
import request from 'superagent'

// relative url for our api:
const url = 'https://reqres.in/api/users'

// String constants:
export const FETCH_USERS = 'FETCH_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function fetchUsers() {
    return dispatch => {
        return request
            .get(url)
            .then(res => {
                const users = res.body.data // Just grabbing the user data out of of the res.body obj

                console.log(`Users: ${users}`)
                dispatch(receiveUsers(users)) // ...then feed the users back into client-side state
            })
            .catch(err => {
                if (err) console.log(err)
            })
    }
}

function receiveUsers(users) {
    console.log(`Users being fed back into client: ${users}`)

    return {
        type: RECEIVE_USERS,
        users
    }
}