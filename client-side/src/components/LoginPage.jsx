// src/components/LoginPage.js
import  { useState } from 'react';
import './LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = 'http://localhost:7098/api/login';

  const handleLogin = async () => {
    try {
        // Make a POST request to your backend API to authenticate the user
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          // Successful login, redirect to a protected page or perform other actions
          console.log('Login successful');
        } else {
          // Handle login failure, show error message to the user
          console.error('Login failed');
        }
      } catch (error) {
        console.error('An error occurred during login', error);
      }
  };

  return (
    <>
    <div className="login-form">
      <h2>Codename Collection</h2>
      <p>Username or Email</p>
      <form action="#" method="POST">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>Login</button>
        {/* <button type="submit" onClick={handleLogin}>Login</button> */}
      </form>
    </div>
    </>
  );
};

export default LoginPage;
