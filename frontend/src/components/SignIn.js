import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        // Mock login logic - replace with your backend API
        if (email === 'admin@example.com' && password === 'admin123') {
            onLogin('admin'); // Notify App of the admin role
            navigate('/admin'); // Redirect to Admin page
        } else if (email === 'customer@example.com' && password === 'customer123') {
            onLogin('customer'); // Notify App of the customer role
            navigate('/customer'); // Redirect to Customer page
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;