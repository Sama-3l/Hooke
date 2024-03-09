import React, { useState } from 'react';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login:', { id, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ textAlign: 'right', maxWidth: '300px', margin: '0 auto' }}>
        <label style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>Email or Username:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          style={{ marginBottom: '15px', padding: '5px', width: '100%', boxSizing: 'border-box' }}
        />
        <label style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: '15px', padding: '5px', width: '100%', boxSizing: 'border-box' }}
        />
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={{ padding: '8px' }}>Login</button>
        </div>
      </form>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span style={{ marginRight: '10px' }}>New to Hooke?</span>
        <a href="/registration">Register</a>
      </div>
    </div>
  );
};

export default LoginForm;
