import Fastify from 'fastify';
import cors from '@fastify/cors';
import authRoutes from './routes/auth.js';
import passwordRoutes from './routes/password.js';
import '../config/db.js'; // Verbindung initialisieren

const app = Fastify({ logger: true });

app.register(cors, {
  origin: true, // oder spezifische URL wie 'http://localhost:5173'
});

app.register(authRoutes);
app.register(passwordRoutes);

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

