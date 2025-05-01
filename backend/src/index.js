const Fastify = require('fastify');
const routes = require('./routes/index.js');
const { connectDB } = require('../config/db.js');

const app = Fastify({ logger: true });

connectDB(app);
app.register(routes);

app.listen({ port: 4000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server läuft unter ${address}`);
});
