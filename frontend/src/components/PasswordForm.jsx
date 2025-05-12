import React, { useState } from 'react';

function PasswordForm({ token }) {
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwords, setPasswords] = useState([]);
  const [showPasswords, setShowPasswords] = useState(false); // 👈 Neu

  // 👇 Nur bei Klick aufrufen
  const loadPasswords = async () => {
    try {
      const response = await fetch('http://localhost:4000/passwords', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setPasswords(data);
        setShowPasswords(true); // Jetzt anzeigen
      } else {
        console.error('Fehler beim Abrufen:', data.message);
      }
    } catch (err) {
      console.error('Fehler beim Laden:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Passwort gespeichert!');
        setTitle('');
        setPassword('');
        // Neue Liste nur laden, wenn sie schon angezeigt wird
        if (showPasswords) {
          setPasswords([...passwords, data]);
        }
      } else {
        setMessage(`❌ Fehler: ${data.message}`);
      }
    } catch (err) {
      setMessage('❌ Fehler beim Senden.');
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <h2>🔐 Passwort speichern</h2>
        <input
          type="text"
          placeholder="Titel* (z. B. Google)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Passwort*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Speichern</button>
        {message && <p>{message}</p>}
      </form>
  
      <div style={{ marginTop: '2rem' }}>
        {!showPasswords ? (
          <button onClick={loadPasswords}>Gespeicherte Passwörter anzeigen</button>
        ) : (
          <button onClick={() => setShowPasswords(false)}>Passwörter ausblenden</button>
        )}
      </div>
  
      {showPasswords && (
        <div>
          <h3>Gespeicherte Passwörter:</h3>
          <ul>
            {passwords.map((entry) => (
              <li key={entry.id}>
                <strong>{entry.title}</strong>: {entry.password_hash}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );  
}

export default PasswordForm;
