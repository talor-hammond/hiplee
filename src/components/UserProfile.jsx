import React, { Component } from 'react'

import { connect } from 'react-redux'

class UserProfile extends Component {
    render() {
        const { user, userSelected } = this.props.user
        console.log(user, userSelected)

        return (
            // TODO: Container for user profile:
            <h3>hello</h3>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(UserProfile)