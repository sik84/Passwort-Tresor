import Fastify from 'fastify';
import routes from './routes/index.js';
import { connectDB } from '../config/db.js';

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
