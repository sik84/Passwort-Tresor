# 🌐 Passwort-Tresor – NGINX Setup

Diese Konfiguration stellt das **Reverse-Proxy-Setup mit HTTPS** für das Passwort-Tresor-Projekt bereit. Sie sorgt für:

- HTTPS-Verschlüsselung (mit selbst signierten Zertifikaten)
- Weiterleitung von HTTP zu HTTPS
- Routing zum React-Frontend & Fastify-Backend

---

## ⚙️ Funktionen

- 📦 Serve React-Frontend (`/`)
- 🔁 Proxy zu Backend-API (`/api/`)
- 🔐 HTTPS mit eigenen Zertifikaten
- 🛡️ Sicherheits-Header

---

## 🔧 Aufbau der Konfiguration

### `default.conf`

```nginx
server {
    listen 80;
    server_name <VM-IP>;

    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name <VM-IP>;

    ssl_certificate     /etc/nginx/certs/cert.pem;
    ssl_certificate_key /etc/nginx/certs/key.pem;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;

    location /api/ {
        proxy_pass https://backend:4000/;
        proxy_ssl_verify off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location / {
        root /usr/share/nginx/html;
        try_files $uri /index.html;
    }
}
