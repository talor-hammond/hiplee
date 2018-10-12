import React from 'react'

export const UserCard = ({ firstName }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ firstName }</h5>
            </div>
        </div>
    )
}