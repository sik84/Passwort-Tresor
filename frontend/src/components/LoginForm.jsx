// src/components/LoginForm.jsx
import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    console.log("🎯 handleLogin triggered", { username, password });
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        onLogin(data.token);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <form onSubmit={handleLogin}>
  <h2>Login</h2>
  {error && <p style={{ color: 'red' }}>{error}</p>}
  <div>
    <label>
      Username<span style={{ color: 'red' }}> *</span>:
    </label>
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />
  </div>
  <div>
    <label>
      Password<span style={{ color: 'red' }}> *</span>:
    </label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>
  <button type="submit">Login</button>
</form>
  );
}
