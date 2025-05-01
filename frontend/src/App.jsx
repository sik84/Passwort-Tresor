// frontend/src/App.jsx

import React, { useState, useEffect } from 'react';
import { getPasswords, createPassword } from '../api'; // API-Client importieren

function App() {
  const [passwords, setPasswords] = useState([]);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Daten beim Start abrufen
    async function fetchPasswords() {
      try {
        const data = await getPasswords();
        setPasswords(data);
      } catch (error) {
        console.error('Error fetching passwords:', error);
      }
    }
    fetchPasswords();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPassword) return;

    try {
      const data = await createPassword({ password: newPassword });
      setPasswords((prevPasswords) => [...prevPasswords, data]);
      setNewPassword('');
    } catch (error) {
      console.error('Error creating password:', error);
    }
  };

  return (
    <div>
      <h1>Passwort-Tresor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Neues Passwort"
        />
        <button type="submit">Hinzufügen</button>
      </form>

      <h2>Passwörter</h2>
      <ul>
        {passwords.map((password, index) => (
          <li key={index}>{password.password}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
