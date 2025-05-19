import dotenv from 'dotenv';
dotenv.config();

import Fastify from 'fastify';
import cors from '@fastify/cors';
import fastifyFormbody from '@fastify/formbody';
import authRoutes from './routes/auth.js';
import passwordRoutes from './routes/password.js';
import '../config/db.js';
import verifyToken from './middleware/verifyToken.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify({
  logger: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, '../certs/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../certs/cert.pem')),
  },
});

const start = async () => {
  try {
    await app.register(fastifyFormbody); // JSON / Form-Parsing aktivieren

    await app.register(cors, {
      origin: true, // oder spezifisch: 'https://localhost:5173'
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
      preflightContinue: true,
    });

    await app.register(authRoutes);
    await app.register(passwordRoutes, {
      preHandler: verifyToken,
    });

    app.get('/', async (request, reply) => {
      return { status: 'API läuft 🎉' };
    });

    await app.listen({ port: 4000, host: '0.0.0.0' });
    app.log.info(`🚀 Server läuft unter https://localhost:4000`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
