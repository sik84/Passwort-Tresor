import React, { useState } from 'react';

function PasswordForm({ token }) {
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwords, setPasswords] = useState([]);
  const [showPasswords, setShowPasswords] = useState(false); // 👈 Neu
  const [visiblePasswords, setVisiblePasswords] = useState({}); // 👈 Neu

  const toggleVisibility = async (id, hash) => {
  if (visiblePasswords[id]) {
    setVisiblePasswords(prev => ({ ...prev, [id]: null }));
    return;
  }

  try {
    const response = await fetch('https://localhost:4000/decrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ encrypted: hash }),
    });

    const data = await response.json();
    if (response.ok) {
      setVisiblePasswords(prev => ({ ...prev, [id]: data.password }));
    } else {
      console.error('Entschlüsselung fehlgeschlagen:', data.message);
    }
  } catch (err) {
    console.error('Fehler bei Entschlüsselung:', err);
  }
};

  // 👇 Nur bei Klick aufrufen
  const loadPasswords = async () => {
    try {
      const response = await fetch('https://localhost:4000/passwords', {
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
      const response = await fetch('https://localhost:4000/passwords', {
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
          <button onClick={() => {
    const confirmed = window.confirm("Hast du die Schablone auf dem Monitor?");
    if (confirmed) {
      loadPasswords();
    }
  }}
>
  Gespeicherte Passwörter anzeigen</button>
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
    <strong>{entry.title}</strong>:{" "}
    {visiblePasswords[entry.id] ?? "●●●●●●●●"}
    <button
      style={{ marginLeft: "1rem" }}
      onClick={() => toggleVisibility(entry.id, entry.password_hash)}
    >
      {visiblePasswords[entry.id] ? "Verbergen" : "Anzeigen"}
    </button>
  </li>
))}
          </ul>
        </div>
      )}
    </div>
  );  
}

export default PasswordForm;
