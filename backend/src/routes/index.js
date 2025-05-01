const { getAllPasswords, createPassword } = require('../controllers/passwordController.js');

module.exports = async function (fastify, options) {
  fastify.get('/passwords', getAllPasswords);
  fastify.post('/passwords', createPassword);

// Neue Health-Check-Route
fastify.get('/health', async (request, reply) => {
  return { status: 'OK' };
});
}