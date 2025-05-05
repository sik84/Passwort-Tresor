import { getPasswords, addPassword } from '../modules/passwordModel.js';

export async function getAllPasswords(request, reply) {
  try {
    const data = await getPasswords();
    reply.send(data);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
}

export async function createPassword(request, reply) {
  try {
    const { title, password } = request.body;
    const saved = await addPassword(title, password);
    reply.status(201).send(saved);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
}
