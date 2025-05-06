// backend/controllers/userController.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByUsername } from '../modules/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'geheim'; // In .env setzen!

export async function registerUser(request, reply) {
  const { username, password } = request.body;

  if (!username || !password) {
    return reply.status(400).send({ error: 'Username und Passwort sind erforderlich.' });
  }

  try {
    const existing = await findUserByUsername(username);
    if (existing) {
      return reply.status(409).send({ error: 'Benutzername bereits vergeben.' });
    }

    const passwordHash = await bcrypt.hash(password_hash, 10);
    const user = await createUser(username, passwordHash);

    reply.status(201).send({ message: 'Benutzer erfolgreich registriert.', user });
  } catch (err) {
    console.error(err);
    reply.status(500).send({ error: 'Registrierung fehlgeschlagen.' });
  }
}

export async function loginUser(request, reply) {
  const { username, password } = request.body;

  if (!username || !password) {
    return reply.status(400).send({ error: 'Username und Passwort sind erforderlich.' });
  }

  try {
    const user = await findUserByUsername(username);
    if (!user) {
      return reply.status(401).send({ error: 'Ungültige Anmeldedaten.' });
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return reply.status(401).send({ error: 'Ungültige Anmeldedaten.' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    reply.send({ message: 'Login erfolgreich', token });
  } catch (err) {
    console.error(err);
    reply.status(500).send({ error: 'Login fehlgeschlagen.' });
  }
}
