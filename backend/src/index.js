const Fastify = require('fastify');
const cors = require('@fastify/cors');
const authRoutes = require('./routes/auth.js');
const passwordRoutes = require('./routes/password.js');
require('../config/db.js'); // Verbindung initialisieren

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
