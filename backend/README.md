# 🔐 Passwort-Tresor – Backend

Dies ist das Backend des Projekts **Passwort-Tresor**, eine einfache Passwortverwaltungs-App mit Node.js, Fastify und PostgreSQL.

## 🚀 Features

- 🔐 Benutzer-Authentifizierung via JSON Web Tokens (JWT)
- 🔑 Verwaltung von Passworteinträgen
- 🔒 HTTPS-Verschlüsselung mit selbst signierten Zertifikaten
- 📦 REST-API mit Fastify
- 🔄 CORS & Form Parsing via Fastify Plugins

## ⚙️ Tech Stack

- **Node.js**
- **Fastify**
- **PostgreSQL**
- **bcrypt** (Passwort-Hashing)
- **jsonwebtoken**
- **dotenv**
- **crypto-js**

## 📁 Projektstruktur

```bash
backend/
│
├── certs/               # Zertifikate für HTTPS
├── config/              # DB-Verbindung
├── docker/              # Docker-Konfigurationen (falls vorhanden)
├── routes/              # API-Routen (auth.js, password.js)
├── middleware/          # Token-Verifizierung
├── scripts/             # Hilfsskripte (z. B. User-Erstellung)
├── tests/               # Unit-Tests mit Jest
├── src/
│   └── index.js         # Einstiegspunkt
├── hash.js              # Passwort-Hashing
├── package.json
└── Dockerfile
```

---

# Lokales Setup

```cd backend
npm install
```

---

# Testen

```npm test
```

---

# Starten

```node src/index.js
```

---

Die API ist dann unter https://localhost:4000 erreichbar.
Hinweis: Das Projekt verwendet HTTPS mit Zertifikaten aus dem Ordner certs/.