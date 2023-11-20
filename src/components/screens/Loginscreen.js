import React, { useState } from 'react';
import axios from 'axios';

function Loginscreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      console.log(response.data); // Server response after login
      setLoginError('Login Successful');
      // Do something after successful login, e.g., redirect to another page
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoginError('Invalid credentials');
      } else {
        setLoginError('Error logging in');
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        className="form-control"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
      {loginError && <p>{loginError}</p>}
    </div>
  );
}

export default Loginscreen;
