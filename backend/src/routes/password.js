import { getAllPasswords, createPassword } from '../controllers/passwordController.js';
import verifyToken from '../middleware/verifyToken.js';

export default async function (fastify, options) {
  // geschützte Routen:
  fastify.get('/passwords', { preHandler: verifyToken }, getAllPasswords);
  fastify.post('/passwords', { preHandler: verifyToken }, createPassword);

  fastify.get('/health', async (request, reply) => {
    return { status: 'OK' };
  });
}

