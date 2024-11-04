// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import UserList from './UserList';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);

    const handleUserRegistered = (newUser) => {
        setUsers([...users, newUser]);
    };

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">User Registration</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Register User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/users">User List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={<RegistrationForm onUserRegistered={handleUserRegistered} />}
                />
                <Route path="/users" element={<UserList />} />
            </Routes>
        </Router>
    );
};

export default App;
