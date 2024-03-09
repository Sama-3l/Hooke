import React, { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Register:', { email, password, name, username });
  };

  return (
    <div >
      <h2 >Register</h2>
      <form onSubmit={handleRegister} style={{ textAlign: 'right', maxWidth: '300px', margin: '0 auto' }}>
        <label style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: '15px', padding: '5px', width: '100%', boxSizing: 'border-box' }}
        />
        <label style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ marginBottom: '15px', padding: '5px', width: '100%', boxSizing: 'border-box' }}
        />
        <label style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" style={{ padding: '8px' }}>Register</button>
        </div>
      </form>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span style={{ marginRight: '10px' }}>Already have an account?</span>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default RegistrationForm;
