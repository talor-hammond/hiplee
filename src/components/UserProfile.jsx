import React, { Component } from 'react'

import { connect } from 'react-redux'

class UserProfile extends Component {
    render() {
        console.log(this.props)

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