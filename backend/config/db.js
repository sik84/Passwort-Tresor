import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'passtresor_user',
  password: process.env.DB_PASSWORD || 'deinPasswort',
  database: process.env.DB_NAME || 'passtresor',
});

pool.on('connect', () => {
  console.log('📦 Verbindung zur PostgreSQL-Datenbank erfolgreich!');
});

pool.on('error', (err) => {
  console.error('❌ Datenbankfehler:', err);
  process.exit(-1);
});

export default pool;
