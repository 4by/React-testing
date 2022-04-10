import React, { useEffect, useState } from 'react';
import axios from "axios";

const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => { loadUsers() }, [])

    const loadUsers = async () => setUsers(await axios.get('https://jsonplaceholder.typicode.com/users').data);

    return (
        <>
            {users.map(user => <div key={user.id} data-testid="user-item"> {user.name} </div>)}
        </>
    );
};

export default Users;