import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByUsername, createUser } from '../modules/userModel.js'; // Korrekt importieren

// Funktion für Benutzerregistrierung
export async function registerUser(request, reply) {
  try {
    const { username, password } = request.body;

    console.log('Eingegebener Benutzername:', username);
    console.log('Eingegebenes Passwort:', password);
    
    // Überprüfen, ob der Benutzer bereits existiert
    const existingUser = await findUserByUsername(username);
    console.log('Gefundener Benutzer:', user);

    if (existingUser) {
      return reply.status(400).send({ message: 'User already exists' });
    }

    console.log('Vergleich mit Passwort-Hash:', user.password_hash);

    // Passwort hashen
    const hashedPassword = await bcrypt.hash(password, 10);

    // Neuen Benutzer erstellen
    const newUser = await createUser(username, hashedPassword);

    // Erfolgreiche Registrierung
    return reply.status(201).send({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    reply.status(500).send({ message: 'Server error during registration', error: err.message });
  }
}

// Funktion für Benutzerlogin
export async function loginUser(request, reply) {
  try {
    const { username, password } = request.body;

    // Benutzer finden
    const user = await findUserByUsername(username);
    if (!user) {
      return reply.status(404).send({ message: 'User not found' });
    }

    // Passwort überprüfen
    const validPassword = await bcrypt.compare(password, user.password_hash);
    console.log('✅ Passwort gültig?', validPassword);
    
    if (!validPassword) {
      return reply.status(401).send({ message: 'Invalid password' });
    }

    // JWT Token generieren
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );

    // Erfolgreiches Login
    return reply.status(200).send({ message: 'Login successful', token });
  } catch (err) {
    console.error('❌ Fehler beim Login:', err);  // <- Hier wichtig!
    reply.status(500).send({ message: 'Server error during login', error: err.message });
  }
}
