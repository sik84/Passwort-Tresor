const { registerUser, loginUser } = require('../controllers/authController.js');

module.exports = async function (fastify, options) {
  fastify.post('/register', registerUser);
  fastify.post('/login', loginUser);
};
