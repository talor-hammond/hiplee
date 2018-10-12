import React, { Component } from 'react'

// Redux; actions:
import { connect } from 'react-redux'

// Components:
import UserCard from './UserCard'

class UserList extends Component {
    render() {
        const { users } = this.props

        return (
            <div className="card-container">
                {
                    Array.isArray(users) && users.map(user => { // check to see whether it in an array in state before mapping.
                        return (
                                <UserCard
                                    key={user.id}
                                    id={user.id}
                                    firstName={user.first_name}
                                />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(UserList)