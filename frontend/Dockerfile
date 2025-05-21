# Basis-Image
FROM node:20 as build

# Arbeitsverzeichnis
WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Restliche Dateien kopieren
COPY . .

# Build für Production (optional, falls du später einen separaten Webserver nutzt)
RUN npm run build

# --- Production-Phase ---
FROM nginx:stable-alpine

# Entferne die Default-Nginx-Seite
RUN rm -rf /usr/share/nginx/html/*

# Kopiere den Build vom vorherigen Schritt
COPY --from=build /app/dist /usr/share/nginx/html

# Kopiere eigene Nginx-Konfig
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Development-Server starten
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
