import React, { Component } from 'react'

// Redux:
import { connect } from 'react-redux'

class FetchButton extends Component {
    constructor() {
        super()
    }
    
    render() {
        return (
        <div className="button-container">
            <button className="btn btn-primary">Fetch users</button>
        </div>
        )
    }
}

export default connect()(FetchButton)