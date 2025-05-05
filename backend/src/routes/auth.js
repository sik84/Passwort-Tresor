// auth.js
import { registerUser, loginUser } from '../controllers/authController.js';

export default async function (fastify, options) {
  fastify.post('/auth/register', registerUser);
  fastify.post('/auth/login', loginUser);
}
