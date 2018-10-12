import React, { Component } from 'react'

// Redux:
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/users'

class FetchButton extends Component {
    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { dispatch } = this.props

        dispatch(fetchUsers())
    }
    
    render() {
        return (
        <div className="button-container">
            <button onClick={() => this.handleClick()} className="btn btn-primary">Fetch users</button>
        </div>
        )
    }
}

export default connect()(FetchButton)