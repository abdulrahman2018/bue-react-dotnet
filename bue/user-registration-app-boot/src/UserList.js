// src/UserList.js
import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:5059/api/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h2>User List</h2>
            <ul className="list-group mt-3">
                {users.map(user => (
                    <li key={user.id} className="list-group-item">
                        {user.name} ({user.email}, {user.phone}, Age: {user.age})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
