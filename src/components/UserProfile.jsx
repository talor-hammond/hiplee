import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class UserProfile extends Component {
    render() {
        const { userSelected } = this.props.users
        const { first_name, last_name, avatar } = this.props.users.users // pulling what we need out of the user obj in state.

        console.log(this.props.users)

        return (
            // TODO: Container for user profile:
            <Fragment>
                {
                    userSelected && ( // container to wrap info; instead of <Fragment></Fragment>
                        <Fragment>
                            <h3>{first_name} {last_name}</h3>
                            <img src={avatar} />
                        </Fragment>
                    )
                }
            </Fragment>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(UserProfile)