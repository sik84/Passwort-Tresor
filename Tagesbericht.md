# Projektfortschritt 
Tagesberichtsdatei erstellt.

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

---

# Tagesbericht
**Datum:** 29.04.2025
**Team:** Team Rot

## Backend:

Struktur für das Backend eingerichtet.
index.js, db.js und routes/index.js im Backend konfiguriert.
Dockerfile für das Backend erstellt.

## Docker:

Docker Compose-Datei erstellt, um die Backend- und Frontend-Container zu verwalten.
Dockerfiles für Backend und Frontend angelegt.
Verbindungen zwischen den Containern konfiguriert.

---

# Tagesbericht
**Datum:** 30.04.2025
**Team:** Team Rot 

Backend-Grundstruktur fertig erstellt, Dockerfile für Back- und Frontend erstellt sowie Einrichtung der docker-compose.yml mit PostgreSQL

---

# Tagesbericht
**Datum:** 01.05.2025
**Team:** Team Rot

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

# Tagesbericht
**Datum:** 02.05.2025
**Team:** Team Rot

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

# Tagesbericht
**Datum:** 05.05.2025
**Team:** Team Rot

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

# Tagesbericht
**Datum:** 06.05.2025
**Team:** Team Rot

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

# Tagesbericht
**Datum:** 07.05.2025
**Team:** Team Rot

admin-login
Logout-Funktion eingefügt in LoginForm.jsx. Rote Sternchen für Pflichtfelder ebenfalls eingefügt.

---

# Tagesbericht
**Datum:** 08.05.2025
**Team:** Team Rot

---

# Tagesbericht
**Datum:** 09.05.2025
**Team:** Team Rot

Weiter auf Branch admin-login gearbeitet. Funktion der Passwortanzeige eingebaut. Diese werden nur gehasht angezeigt. 

Admin-Login eingeführt, dabei Nutzernamen in Admin geändert. Hierfür wurde ein neuer Branch erstellt, nämlich admin-loing.


---

# Tagesbericht
**Datum:** 10.05.2025
**Team:** Team Rot

Projekt via docker-compose erfolgreich deployt. Skript für admin-Login /backend/scripts/createAdmin.js musste im Backend erstellt werden, 
damit man sich auf Container einloggen konnte.

---

# Tagesbericht
**Datum:** 12.05.2025
**Team:** Team Rot

Heute wurde das lokale Projekt vollständig auf HTTPS umgestellt. Sowohl Backend als auch Frontend kommunizieren nun verschlüsselt – inklusive selbstsignierter Zertifikate für realistische Tests.

---

# Tagesbericht
**Datum:** 13.05.2025
**Team:** Team Rot

Popupfenster für Sicherheitsabfrage erstellt: "Hast Du die Schablone auf dem Monitor?" 
Dieses Fenster erscheint, bevor die Passwörter entschlüsselt werden.

---

# Tagesbericht
**Datum:** 14.05.2025
**Team:** Team Rot

Die grundlegende Struktur für die Passwortentschlüsselung wurde sowohl im Backend als auch im Frontend implementiert. 
Der Admin kann nun Passwörter verschlüsselt speichern und auf Wunsch entschlüsseln lassen.

---

# Tagesbericht
**Datum:** 15.05.2025
**Team:** Team Rot

Heute wurde das Deployment für den Passwort-Tresor vorbereitet: Docker-Compose wurde erweitert um Nginx als Reverse Proxy, HTTPS mit selbstsignierten Zertifikaten eingerichtet und die Container für Frontend, Backend und Datenbank konfiguriert.

---

# Tagesbericht
**Datum:** 16.05.2025
**Team:** Team Rot

Deployment-Versuch auf Azure-VM. Anwendung konnte nicht geladen werden, da 500er Server-Fehler.
Fehler konnte noch nicht behoben werden.

---

# Tagesbericht
**Datum:** 19.05.2025
**Team:** Team Rot

Feature der Entschlüsselung von Passwörtern getestet. Bugs mit dem request-body. Dieser ist nicht definiert.
Morgen wieder Deployment auf Azure.

---

# Tagesbericht
**Datum:** 20.05.2025
**Team:** Team Rot

feat: Entschlüsselungsfunktion für Passwörter per Button im Branch "entschluesselung-feature" hinzugefügt.

- Backend-Route /passwords/decrypt integriert
- Entschlüsselungslogik in passwordController angebunden
- Frontend-Button „Anzeigen“ ruft Entschlüsselung ab
- UI zeigt entschlüsseltes Passwort bei Klick
- Branch entschluesselung-feature gelöscht

Fix: Nginx Proxy auf HTTPS Backend umgestellt und HTTPS-Konfiguration verbessert

- Proxy-Pass von http://backend:4000 auf https://backend:4000 geändert, um Verbindungsfehler zu vermeiden
- Nginx SSL-Settings verfeinert
- Vite-Config mit HTTPS aktiviert
- Fehlerquelle ERR_CONNECTION_REFUSED bei API-Requests behoben

Wichtig!! Änderungen auf der VM umgesetzt. Lokale Testung folgt noch!

---

# Tagesbericht
**Datum:** 21.05.2025
**Team:** Team Rot

Frontend-Build hinzugefügt, Nginx-Konfiguration angepasst - Änderungen in den Main-Branch übernommen.
Frontend wird aufgerufen, aber nach wie vor Server-Fehler. Bugfixing morgen.