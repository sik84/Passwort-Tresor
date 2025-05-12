// 1. dotenv ganz oben einfügen
import dotenv from 'dotenv';
dotenv.config(); // Lädt die Variablen aus der .env-Datei
// 2. Der Import von Fastify und weiteren Modulen bleibt unverändert
import Fastify from 'fastify';
import cors from '@fastify/cors';
import authRoutes from './routes/auth.js';
import passwordRoutes from './routes/password.js';
import '../config/db.js'; // Verbindung initialisieren
import verifyToken from './middleware/verifyToken.js';  // Middleware importieren
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 3. Der Zugriff auf die Umgebungsvariable für JWT_SECRET
const jwtSecret = process.env.JWT_SECRET || 'fallback_secret'; // Falls die .env-Variable fehlt, Fallback verwenden

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 4. Fastify Server Setup
const app = Fastify({
  logger: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, '../certs/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../certs/cert.pem')),
  },
});

app.register(cors, {
  origin: true, // oder spezifische URL wie 'https://localhost:5173'
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Das ermöglicht das Setzen von Cookies und Headern wie Authorization
});

app.register(authRoutes);
app.register(passwordRoutes, {
  preHandler: verifyToken  // Middleware auf alle Routes in passwordRoutes anwenden
});

app.listen({ port: 4000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`🚀 Server läuft unter ${address}`);
});

app.get('/', async (request, reply) => {
  return { status: 'API läuft 🎉' };
});
