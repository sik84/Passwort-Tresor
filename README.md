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
[Projektbericht](https://github.com/Kurs-24-06/Passwort-Tresor/blob/main/Tagesbericht.md)
## Datenbank (als Beispiel)
