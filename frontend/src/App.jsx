import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PasswordManager() {
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [passwords, setPasswords] = useState([]);

  const fetchPasswords = async () => {
    const res = await axios.get('http://localhost:4000/passwords');
    setPasswords(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/passwords', { title, password });
    setTitle('');
    setPassword('');
    fetchPasswords();
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Speichern</button>
      </form>

      <h2>Gespeicherte Passwörter</h2>
      <ul>
        {passwords.map((pw) => (
          <li key={pw.id}>
            <strong>{pw.title}:</strong> {pw.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
