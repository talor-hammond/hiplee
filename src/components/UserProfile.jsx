import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class UserProfile extends Component {
    render() {
        const { user: { first_name, last_name, avatar }, userSelected } = this.props.user

        return (
               userSelected && (
                    <Fragment>
                        <h3>{first_name} {last_name}</h3>
                        <img src={avatar} />
                    </Fragment>
               )
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(UserProfile)