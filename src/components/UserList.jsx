import React, { Component } from 'react'

// Redux; actions:
import { connect } from 'react-redux'

// Components:
import { UserCard } from './UserCard'

class UserList extends Component {
    constructor() {
        super()
    }

    render() {
        const { users } = this.props

        return (
            <div className="card-container">
                {
                    users.map(user => {
                        return (
                            <UserCard key={user.id} firstName={user.first_name} /> // this needs to render a UserCard component and feed data through props
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