import pool from '../../config/db.js';

export async function getPasswords() {
  const result = await pool.query('SELECT * FROM passwords');
  return result.rows;
}

export async function addPassword(title, password) {
  const result = await pool.query(
    'INSERT INTO passwords (title, password) VALUES ($1, $2) RETURNING *',
    [title, password]
  );
  return result.rows[0];
}
