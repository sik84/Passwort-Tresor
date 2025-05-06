import pool from '../../config/db.js';

export async function getPasswords() {
  const result = await pool.query('SELECT * FROM passwords');
  return result.rows;
}

export async function addPassword(title, encryptedPassword) {
  const result = await pool.query(
    'INSERT INTO passwords (title, password_hash) VALUES ($1, $2) RETURNING *',
    [title, encryptedPassword]
  );
  return result.rows[0];
}
