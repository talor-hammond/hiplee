import React, { Component } from 'react'

// Redux; actions:
import { connect } from 'react-redux'

// Components:
import { UserCard } from './UserCard'

class UserList extends Component {
    constructor() {
        super()

        this.state = {
            users: [1, 2, 3, 4]
        }
    }

    render() {
        const { users } = this.state
        console.log(this.props.users)

        return (
            <div className="card-container">
                {
                    users.map((user, i) => {
                        return (
                            <UserCard key={i} /> // this needs to render a UserCard component and feed data through props
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