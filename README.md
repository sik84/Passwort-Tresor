# Passwort-Tresor
Projekt zum sicheren Speichern von Passwörtern
# 🔐 Passwort-Tresor (Abschlussprojekt) von Stefan Sikiric

## 📌 Projektbeschreibung
Ein Container-basiertes Web-Projekt zur sicheren Verwaltung von Zugangsdaten, bestehend aus:
- Frontend (React)
- Backend (API mit Login + Verschlüsselung + Entschlüsselung)
- PostgreSQL-Datenbank
- Hosting auf Azure-VM mit Fokus auf Sicherheit (SSH, TLS, Container-Hardening)

---

## 🧭 Zielsetzung / Vision
Entwicklung eines internen Tools für Teams zur sicheren Passwortverwaltung auf selbst gehosteter Infrastruktur.

---

## 🛠️ Tech Stack

🌐 Frontend

- React – UI-Bibliothek für komponentenbasiertes Webinterface

- Vite – moderner Entwicklungs- und Build-Toolchain (schneller als CRA)

- JavaScript (ES6+) – moderne Sprachfeatures für die Logik

- CSS – responsive, leichtgewichtige Gestaltung der UI

🔒 Backend

- Fastify – performantes Node.js Webframework mit eingebauter Sicherheit

- Node.js (ES Modules) – serverseitige JavaScript-Ausführung

- JWT (jsonwebtoken) – sichere Token-basierte Authentifizierung

- bcrypt – sichere Passwort-Hashing-Funktion

- PostgreSQL – relationale Datenbank (ansteuerbar über pg)

🌐 API & Sicherheit

- HTTPS mit NGINX – verschlüsselte Kommunikation via SSL-Zertifikaten

- NGINX Reverse Proxy – Routing von Anfragen an Frontend & Backend

- CORS & Formbody Middleware – sicheres Handling von Anfragen und Daten

🐳 Deployment

- Docker & Docker Compose – Containerisierung des Front- und Backends

- Azure Virtual Machine (Ubuntu) – gehostete Umgebung für das Deployment

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
Passwörtern für Teams mittels Docker-Container und Azure-Deployment.


# Projekt-Dokumentation
## Tagesberichte

[Projektbericht](https://github.com/Kurs-24-06/Passwort-Tresor/blob/main/Tagesbericht.md)

## Datenbank

- [Datenbank-Beschreibung](./database/README.md)

## Frontend
## Backend

```markdown
## 📚 Dokumentation

- [Frontend-Dokumentation](./frontend/README.md)
- [Backend-Dokumentation](./backend/README.md)

---

## nginx

- [nginx-Dokumentation](./nginx/README.md)

📄 Lizenz
Dieses Projekt steht unter der MIT-Lizenz.
