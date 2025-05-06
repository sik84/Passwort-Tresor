import bcrypt from 'bcrypt';

const plaintextPassword = 'testpass';
const hashFromDB = '$2b$10$JkQ2j4v4TgFZl6x9yqM0KuYJeKoO7YXokZpXtGgQHtU1qRrgE8Pni';

const result = await bcrypt.compare(plaintextPassword, hashFromDB);
console.log('✅ Vergleichsergebnis:', result);
