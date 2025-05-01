// src/controllers/passwordController.js
const { getPasswords, addPassword } = require('../modules/passwordModel.js');

const getAllPasswords = async (request, reply) => {
  try {
    const data = await getPasswords(); // Beispiel für eine getPasswords() Funktion
    reply.send(data);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
};

const createPassword = async (request, reply) => {
  try {
    const { title, password } = request.body;
    const saved = await addPassword(title, password); // Beispiel für eine savePassword() Funktion
    reply.status(201).send(saved);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
};

module.exports = { getAllPasswords, createPassword }; // Exporte mit module.exports
