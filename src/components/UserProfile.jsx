import React, { Component } from 'react'

import { connect } from 'react-redux'

class UserProfile extends Component {
    render() {
        console.log(this.props)

        return (
            <h1>firstName, lastName</h1>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(UserProfile)