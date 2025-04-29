# Passwort-Tresor
Projekt zum sicheren Speichern von P
# 🔐 Passwort-Tresor (Abschlussprojekt)

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


## 🚦 Projektfortschritt (Tageslog / Scrum-Daily)

28.04.2025:

1. Frontend:

Struktur für das Frontend eingerichtet.
React-Anwendung initialisiert.
.gitignore für das Frontend konfiguriert.
Dockerfile für das Frontend erstellt.

2. Projekt-Setup:

Git-Repository für das Projekt erstellt und die grundlegende Ordnerstruktur aufgesetzt.
Erste Commit- und Push-Aktionen durchgeführt, um die Basis des Projekts zu speichern.

29.04.2025:

Backend:

Struktur für das Backend eingerichtet.
index.js, db.js und routes/index.js im Backend konfiguriert.
Dockerfile für das Backend erstellt.

Docker:

Docker Compose-Datei erstellt, um die Backend- und Frontend-Container zu verwalten.
Dockerfiles für Backend und Frontend angelegt.
Verbindungen zwischen den Containern konfiguriert.