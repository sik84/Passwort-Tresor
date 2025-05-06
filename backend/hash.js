// hash.js
import bcrypt from 'bcrypt';

const password = 'testpass';

bcrypt.hash(password, 10).then(hash => {
  console.log(`Hash für "${password}":\n`, hash);
});
