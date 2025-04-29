# Basis-Image
FROM node:20

# Arbeitsverzeichnis
WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Restliche Dateien kopieren
COPY . .

# Build für Production (optional, falls du später einen separaten Webserver nutzt)
RUN npm run build

# Development-Server starten
EXPOSE 5173
CMD ["npm", "run", "dev"]
