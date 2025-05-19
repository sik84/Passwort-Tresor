import { getPasswords, addPassword } from '../modules/passwordModel.js';
import { encrypt, decrypt } from '../utils/encryption.js'; // Verschlüsselung importieren

export async function getAllPasswords(request, reply) {
  try {
    const data = await getPasswords();

    // NICHT entschlüsseln – nur raw zurückgeben
    const hashedOnly = data.map(entry => ({
      title: entry.title,
      password_hash: entry.password_hash,
      created_at: entry.created_at,
    }));

    reply.send(hashedOnly);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
}

export async function createPassword(request, reply) {
  try {
    const { title, password } = request.body;

    // Passwort verschlüsseln
    const encryptedPassword = encrypt(password);

    // In die DB speichern
    const saved = await addPassword(title, encryptedPassword);

    reply.status(201).send(saved);
  } catch (err) {
    reply.status(500).send({ error: err.message });
  }
}

export async function decryptPassword(request, reply) {
  try {
    const { encryptedPassword } = request.body;

    if (!encryptedPassword) {
      return reply.status(400).send({ error: 'Encrypted password is missing' });
    }

    const decrypted = decrypt(encryptedPassword);

    reply.send({ decryptedPassword: decrypted });
  } catch (err) {
    reply.status(500).send({ error: 'Failed to decrypt password', details: err.message });
  }
}
