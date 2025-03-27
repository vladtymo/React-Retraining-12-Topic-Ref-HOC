import React from 'react'
import { withEmptyLabel } from './withEmptyLabel'

function UserList({ items }) {

    // if (!items || items.length === 0) {
    //     return <p>List is empty!</p>
    // }
    return (
        <>
            <h2>User List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default withEmptyLabel(UserList, 'users')