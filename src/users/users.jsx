import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => { setUsers(loadUsers()) }, [])

    const loadUsers = async () => {
        try { return axios.get('https://jsonplaceholder.typicode.com/users').data }
        catch (e) { console.log(e) }
    }
    
    // await axios.get('https://jsonplaceholder.typicode.com/users').data)

    return (
        <div>
            {/* {users.map(user => <div key={user.id} data-testid="user-item">{user.name}</div>)} */}
            {users}
        </div>
    )
}

export default Users