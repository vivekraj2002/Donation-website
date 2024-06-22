import React, { useState } from 'react';
import axios from "axios";
import { Link, Navigate } from 'eact-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={'/'} />;
  }

  return (
    <div style={{ backgroundColor: '#D8B4F2', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <form style={{ backgroundColor: '#482A76', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} onSubmit={handleLogin}>
        <h2 style={{ color: '#F6F0FF', textAlign: 'center', marginBottom: '20px' }}>Log in</h2>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ color: '#F6F0FF' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #F6F0FF',
              borderRadius: '5px',
              backgroundColor: '#6549A4',
              color: '#F6F0FF',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ color: '#F6F0FF' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #F6F0FF',
              borderRadius: '5px',
              backgroundColor: '#6549A4',
              color: '#F6F0FF',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button type="submit" style={{ backgroundColor: '#F6F0FF', color: '#482A76', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Log in
          </button>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '10px', fontSize: '14px', color: '#F6F0FF' }}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;