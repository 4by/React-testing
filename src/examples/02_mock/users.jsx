import React, { useEffect, useState } from 'react';
import axios from "axios";

const Users = () => {
    
    const [users, setUsers] = useState([]);
    const loadUsers = async () => setUsers(await axios.get('https://jsonplaceholder.typicode.com/users').data);
    useEffect(() => { loadUsers() }, [])

    return (
        <>
            {users.map(user => <div key={user.id} data-testid="user-item"> {user.name} </div>)}
        </>
    );
};

export default Users;