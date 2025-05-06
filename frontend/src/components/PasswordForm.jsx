import React, { useState } from 'react';

function PasswordForm({ token }) {
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('🔐 Token in PasswordForm:', token);  // Token loggen
    console.log('Authorization Header:', `Bearer ${token}`); // Header loggen

    try {
      const response = await fetch('http://localhost:4000/passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,  // Token im Header senden
        },
        body: JSON.stringify({ title, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Passwort gespeichert!');
        setTitle('');
        setPassword('');
      } else {
        setMessage(`❌ Fehler: ${data.message}`);
      }
    } catch (err) {
      setMessage('❌ Fehler beim Senden.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <h2>🔐 Passwort speichern</h2>
      <input
        type="text"
        placeholder="Titel (z. B. Google)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Speichern</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default PasswordForm;
