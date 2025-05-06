-- Erstellt Tabelle für Benutzer
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS passwords (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Beispielnutzer einfügen (zum Testen)
INSERT INTO users (username, password_hash)
VALUES ('testuser', '$2b$10$PUeAyTTjq13XY6Pi5U0jmepR4HEK4fHa2eeqCC1eGSZh5Z3Q6TPky')
ON CONFLICT (username) DO UPDATE
SET password_hash = EXCLUDED.password_hash;