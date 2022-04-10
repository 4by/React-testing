import React, { useEffect, useState } from 'react';
import axios from "axios";

const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => { loadUsers() }, [])

    const loadUsers = async () => setUsers(await axios.get('https://jsonplaceholder.typicode.com/users').data);

    return (
        <div data-testid="users-page">
            {users.map(user => <div key={user.id} data-testid="user-item"> {user.name} </div>)}
        </div>
    );
};

export default Users;