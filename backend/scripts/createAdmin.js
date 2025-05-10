import bcrypt from 'bcrypt';
import pg from 'pg';

const { Pool } = pg;

// Verbindung zur Datenbank – verwende dieselben Werte wie in deiner docker-compose.yml
const pool = new Pool({
  host: 'database',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'passtresor',
});

const username = 'admin';
const plainPassword = process.env.ADMIN_PASSWORD || 'defaultpass';  // Fallback für den Fall, dass die Umgebungsvariable nicht gesetzt ist

async function createAdminUser() {
  const passwordHash = await bcrypt.hash(plainPassword, 10);

  try {
    await pool.query(`
      INSERT INTO users (username, password_hash)
      VALUES ($1, $2)
      ON CONFLICT (username) DO UPDATE
      SET password_hash = EXCLUDED.password_hash
    `, [username, passwordHash]);

    console.log('✅ Admin-Benutzer erfolgreich erstellt/aktualisiert.');
  } catch (err) {
    console.error('❌ Fehler beim Erstellen des Admins:', err.message);
  } finally {
    await pool.end();
  }
}

createAdminUser();
