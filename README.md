# Passwort-Tresor
Projekt zum sicheren Speichern von Passwörtern
# 🔐 Passwort-Tresor (Abschlussprojekt) von Stefan Sikiric

## 📌 Projektbeschreibung
Ein Container-basiertes Web-Projekt zur sicheren Verwaltung von Zugangsdaten, bestehend aus:
- Frontend (React)
- Backend (API mit Login + Verschlüsselung)
- PostgreSQL-Datenbank
- Hosting auf Azure-VM mit Fokus auf Sicherheit (SSH, TLS, Container-Hardening)

---

## 🧭 Zielsetzung / Vision
Entwicklung eines internen Tools für Teams zur sicheren Passwortverwaltung auf selbst gehosteter Infrastruktur.

---

## 🛠️ Tech Stack

| Komponente     | Technologie        |
|----------------|--------------------|
| Frontend       | React              |
| Backend        | Node.js + Express *(oder Python FastAPI)* |
| Datenbank      | PostgreSQL         |
| Container      | Docker / Docker Compose |
| Cloud          | Azure (VM oder ACI) |
| Sicherheit     | JWT / AES / TLS / Benutzerrollen |
| Verwaltung     | GitHub, SCRUM-Tagebuch in README |

---

## 🧪 Testuser für Demo

| Username | Passwort |
|----------|----------|
| demo1    | geheim123 |
| demo2    | passwort |

---

## 🔐 Sicherheitsmaßnahmen (geplant / umgesetzt)

- [x] Keine öffentlichen Ports ohne Authentifizierung
- [x] Backend trennt Logik & Secrets
- [ ] TLS-Zertifikate für Frontend-API
- [ ] Container laufen ohne Root
- [ ] Logging + Monitoring (z. B. Fail2Ban, Logs über Volume)

---

## 📎 Links (Dokumentation / Ressourcen)

- [React Projektstruktur](#)
- [Azure VM Einrichtung](#)
- [Datenbankschema](#)
- [Docker Compose Setup](#)
asswörtern für Teams mittels Docker-Container und Azure-Deployment.


# Projekt-Dokumentation
## Tagesberichte
https://github.com/Kurs-24-06/Passwort-Tresor/blob/main/Tagesbericht.md
## Datenbank (als Beispiel)



## 🚦 Projektfortschritt (Tageslog / Scrum-Daily)

# Tagesbericht
**Datum:** 28.04.2025:
**Team:** Team Rot

---

## 1. Frontend:

Struktur für das Frontend eingerichtet.
React-Anwendung initialisiert.
.gitignore für das Frontend konfiguriert.
Dockerfile für das Frontend erstellt.

## 2. Projekt-Setup:

Git-Repository für das Projekt erstellt und die grundlegende Ordnerstruktur aufgesetzt.
Erste Commit- und Push-Aktionen durchgeführt, um die Basis des Projekts zu speichern.

# Tagesbericht
**Datum:** 29.04.2025:
**Team:** Team Rot

---

## Backend:

Struktur für das Backend eingerichtet.
index.js, db.js und routes/index.js im Backend konfiguriert.
Dockerfile für das Backend erstellt.

## Docker:

Docker Compose-Datei erstellt, um die Backend- und Frontend-Container zu verwalten.
Dockerfiles für Backend und Frontend angelegt.
Verbindungen zwischen den Containern konfiguriert.

30.04.2025: 

Backend-Grundstruktur fertig erstellt, Dockerfile für Back- und Frontend erstellt sowie Einrichtung der docker-compose.yml mit PostgreSQL

---

01.05.2025:

#### ✅ Backend

- Setup von Jest für Unit-Tests

- Erstellung eines einfachen API-Tests (/health)

- Behebung von Problemen mit import/export durch Umstellung auf CommonJS

- Tests erfolgreich ausgeführt (npm test)

- Korrektur und Erweiterung des passwordController.js zur Verarbeitung von title & password

- Anbindung an PostgreSQL via addPassword() & getPasswords() aus passwordModel.js

#### ✅ Frontend

- API-Integration umgesetzt (getPasswords, createPassword)

- Nutzung von useEffect und Formular-Handling (onSubmit)

- Erste Verbindung zum Backend (GET, POST)

- UI-Erweiterung um ein title-Feld im Formular

- Anbindung des erweiterten Formulars an die API

#### 🛠️ Sonstiges

- Erste POST-Verbindung scheiterte (Connection Refused), Ursache: Container nicht aktiv
- Docker-Container-Tests und Service-Start werden am Folgetag durchgeführt

---

02.05.2025:

1. API-Endpunkte für Passwörter
GET /passwords: Gibt eine Liste aller gespeicherten Passwörter zurück.

POST /passwords: Ermöglicht das Hinzufügen eines neuen Passworts. Heute erfolgreich getestet.

2. API-Endpunkte für Benutzerauthentifizierung
POST /register: Erlaubt es einem neuen Benutzer, sich zu registrieren.

POST /login: Ermöglicht es einem Benutzer, sich anzumelden und ein JWT zu erhalten.

### Benutzer-Authentifizierung

- Die Benutzer-Authentifizierung wurde vorbereitet Die nötigen Endpunkte für die Registrierung und den Login wurden erstellt. 

### Container-Verbindung

- Die Container-Verbindung war erfolgreich. Alle separaten Container für Front-, Backend und Datenbank konnten miteinander kommunizieren.

---

📅 Fortschritt – 05.05.2025

## Backend (Fastify + PostgreSQL)

Fastify-Server erfolgreich eingerichtet (inkl. Logging & CORS)

Authentifizierungs-Endpunkte: /auth/register & /auth/login

JWT-basierte Authentifizierung mit Middleware verifyToken

Geschützte Passwort-Routen unter /passwords verfügbar

PostgreSQL-Anbindung über db.js hergestellt

Health-Check unter / implementiert

## Frontend (React + Vite)
Projekt mit Vite angelegt und React konfiguriert

LoginForm.jsx: Benutzer-Login mit Token-Speicherung im LocalStorage

PasswordForm.jsx: Eingabeformular zur Passwortverwaltung

Authentifizierte Requests ans Backend funktionieren

Erste API-Tests erfolgreich in Postman durchgeführt

### Datenbank:

- **Tabelle `users`**:
   - Spalten: `id`, `username`, `password`.
   - Die Benutzer werden mit einem gehashten Passwort gespeichert.
   - Ein Beispielbenutzer wurde zum Testen hinzugefügt.

- **Tabelle `passwords`**:
   - Spalten: `id`, `title`, `password`, `created_at`.
   - Passwörter werden mit einem Titel und einem sicheren Hash gespeichert.

## Debugging & Struktur
Alle Import-/Export-Probleme in ESM-Modulen behoben

Routen-Fehler (404) identifiziert & behoben

Initiale Datenbankfehler erkannt: Tabelle users fehlt noch (wird später angelegt)

Tabelle users wird zwar erstellt, dennoch gibt es Fehler beim Benutzerlogin

---

06.05.2025:

## ✅ Implementierte Funktionen (Stand: [heutiges Datum])

- [x] Benutzer-Login mit JWT-Token (Fastify + jsonwebtoken)
- [x] Sicheres Speichern von Passwörtern in PostgreSQL
- [x] Frontend-Formular zur Passwort-Eingabe
- [x] Token-Speicherung im localStorage (persistente Auth)
- [x] Middleware zum Schutz von Routen (`verifyToken`)
- [x] `.env`-Verwaltung für Secrets (z. B. `JWT_SECRET`)
- [x] Anzeige von Erfolgs-/Fehlermeldungen im UI
- [x] Logging zur Fehleranalyse im Frontend & Backend
- [x] encryption.js im Ordner utils angelegt


## 🔧 Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Fastify (Node.js)
- **Datenbank:** PostgreSQL
- **Security:** bcrypt, JWT (json-web-token)

## 📦 Datenbankstruktur (Beispiel)

**Tabelle `passwords`:**

| id | user_id | title  | password (gehasht) |
|----|---------|--------|--------------------|
| 1  | 1       | Google | $2b$10$...         |

## 🔍 Nächste Schritte

- [ ] Passwortverschlüsselung statt Hash (z. B. AES)
- [ ] Passwort-Liste im Frontend anzeigen
- [ ] Logout-Funktion & Token-Handling verbessern
- [ ] ErrorBoundary für robustere Fehlerbehandlung

---
