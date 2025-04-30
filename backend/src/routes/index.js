import { getAllPasswords, createPassword } from '../controllers/passwordController.js';

export default async function routes(fastify, options) {
  fastify.get('/passwords', getAllPasswords);
  fastify.post('/passwords', createPassword);
}
