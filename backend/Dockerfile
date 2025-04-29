# Base image
FROM node:20

# Arbeitsverzeichnis setzen
WORKDIR /app

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm install

# Restliche Dateien kopieren
COPY . .

# Exponierter Port (z. B. 4000 für Fastify)
EXPOSE 4000

# Startbefehl
CMD ["node", "src/index.js"]
