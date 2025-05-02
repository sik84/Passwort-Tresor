const Fastify = require('fastify');
const cors = require('@fastify/cors');
const routes = require('./routes/index.js');
require('../config/db.js'); // Nur importieren, um Verbindung aufzubauen

const app = Fastify({ logger: true });

async function start() {
  try {
    await app.register(cors, {
      origin: true, // oder eine spezifische URL wie "http://localhost:5173"
    });
    app.register(routes);

    await app.listen({ port: 4000, host: '0.0.0.0' });
    app.log.info(`Server läuft unter ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
