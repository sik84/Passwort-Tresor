CREATE TABLE IF NOT EXISTS passwords (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  password TEXT NOT NULL
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Beispielnutzer einfügen (zum Testen)
INSERT INTO users (username, password)
VALUES ('testuser', '$2b$10$JkQ2j4v4TgFZl6x9yqM0KuYJeKoO7YXokZpXtGgQHtU1qRrgE8Pni')  -- Passwort: "testpass"
ON CONFLICT (username) DO NOTHING;