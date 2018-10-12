import React, { Component } from 'react'

// Redux:
import { connect } from 'react-redux'
import { fetchUserById } from '../actions/users'

class UserCard extends Component {
    selectUserById(id) {
        const { dispatch } = this.props

        dispatch(fetchUserById(id))
    }

    render() {
        const { firstName, id } = this.props

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{firstName}</h5>
                    <button className="btn" onClick={() => this.selectUserById(id)}>Select</button>
                </div>
            </div>
        )
    }
}

export default connect()(UserCard)