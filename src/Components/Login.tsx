
import React, { useState } from 'react';
import axios from 'axios';
// import Home from './Home';

function LoginForm({ setIsLogin }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/users/login', {
        username,
        password,
      });

      console.log(response)

      const token = response.data.token;

      // Save the token to local storage
      localStorage.setItem('token', token);
      setIsLogin(true)
      // <Home/>
      // Redirect the user or perform other actions
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
  return (
    <div className='container align-items-center justify-content-center col-md-3 was-validated'>
      <h4 className='text-center mb-3'>Login to your account</h4>
      <div>
        <label className='form-label'>Username:</label>
        <input className='form-control'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='form-label'>Password:</label>
        <input className='form-control'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
    
      <button type="submit" onClick={handleLogin} className="btn btn-primary btn-lg mt-3">Sign in</button>
    </div>
  );
}

export default LoginForm;

