// src/App.jsx
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import PasswordForm from './components/PasswordForm';

function App() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (token) => {
    setToken(token);
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Passwort-Tresor</h1>
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <PasswordForm token={token} />
      )}
    </div>
  );
}

export default App;
