import React, { Component, Fragment } from 'react'

// Redux; actions:
import { connect } from 'react-redux'

class UserList extends Component {
    constructor() {
        super()

        this.state = {
            users: [1, 2, 3]
        }
    }

    render() {
        const { users } = this.state

        return (
            <Fragment>
                {
                    users.map((user, i) => {
                        return (
                            <p key={i}>A user</p> // this needs to render a UserCard component and feed data through props
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default connect()(UserList)