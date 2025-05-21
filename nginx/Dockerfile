FROM nginx:stable-alpine

# Zertifikate kopieren (falls HTTPS gewünscht)
COPY nginx/certs/ /etc/nginx/certs/

# Nginx Konfig kopieren
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Frontend-Build in das Verzeichnis kopieren, aus dem Nginx serviert
COPY /frontend/dist/ /usr/share/nginx/html/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

