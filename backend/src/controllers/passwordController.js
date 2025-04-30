import { getPasswords, addPassword } from '../modules/passwordModel.js';

export const getAllPasswords = async (request, reply) => {
  try {
    const data = await getPasswords();
    reply.send(data);
  } catch (err) {
    reply.status(500).send({ error: 'Fehler beim Abrufen der Passwörter.' });
  }
};

export const createPassword = async (request, reply) => {
  try {
    const { title, password } = request.body;
    const result = await addPassword(title, password);
    reply.code(201).send(result);
  } catch (err) {
    reply.status(500).send({ error: 'Fehler beim Speichern des Passworts.' });
  }
};
