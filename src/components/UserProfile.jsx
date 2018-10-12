import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'

class UserProfile extends Component {
    render() {
        console.log(this.props)

        return (
            // TODO: Container for user profile:
            <Fragment>
                        <Fragment>
                            <h3>hello</h3>
                        </Fragment>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(UserProfile)