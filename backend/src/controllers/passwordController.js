import { getPasswords, addPassword } from '../modules/passwordModel.js';
import { encrypt, decrypt } from '../utils/encryption.js'; // Verschlüsselung importieren

export async function getAllPasswords(request, reply) {
  try {
    const data = await getPasswords();

    // Alle Passwörter entschlüsseln
    const decrypted = data.map(entry => ({
      ...entry,
      password: decrypt(entry.password_hash), // password_hash entschlüsseln
    }));

    reply.send(decrypted);
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
