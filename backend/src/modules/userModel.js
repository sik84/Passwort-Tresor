// backend/modules/userModel.js

import pool from '../../config/db.js';

// Neuen Benutzer erstellen
export async function createUser(username, passwordHash) {
  const result = await pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, created_at',
    [username, passwordHash]
  );
  return result.rows[0];
}

// Benutzer anhand des Namens finden (für Login)
export async function findUserByUsername(username) {
  const result = await pool.query(
    'SELECT * FROM users WHERE username = $1',
    [username]
  );
  return result.rows[0];
}
