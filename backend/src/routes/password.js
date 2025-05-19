import { getAllPasswords, createPassword, decryptPassword } from '../controllers/passwordController.js';

export default async function (fastify, options) {
  // geschützte Routen:
  fastify.get('/passwords', getAllPasswords);
  fastify.post('/passwords', createPassword);
  fastify.post('/passwords/decrypt', decryptPassword);


  fastify.get('/health', async (request, reply) => {
    return { status: 'OK' };
  });
}

