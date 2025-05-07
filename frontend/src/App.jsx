// src/App.jsx
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import PasswordForm from './components/PasswordForm';

function App() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = (token) => {
    console.log('✅ Login token:', token); // Hier loggen wir den Token
    localStorage.setItem('token', token);  // Speichern im localStorage
    setToken(token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setIsLoggedIn(false);
  };  

  return (
    <div className="App">
      <h1>Passwort-Tresor</h1>
  
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <button onClick={handleLogout} style={{ marginBottom: '1rem' }}>
            🔓 Logout
          </button>
          <PasswordForm token={token} />
        </>
      )}
    </div>
  );
}
export default App;
