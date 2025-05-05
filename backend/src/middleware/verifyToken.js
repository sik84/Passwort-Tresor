export default function verifyToken(request, reply, done) {
  const authHeader = request.headers.authorization;
  console.log("Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    reply.code(401).send({ message: 'Token fehlt oder ungültig' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecret');
    request.user = decoded;
    done();
  } catch (err) {
    reply.code(401).send({ message: 'Ungültiger Token' });
  }
}
