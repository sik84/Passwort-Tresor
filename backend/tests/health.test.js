const Fastify = require('fastify');
const routes = require('../src/routes/index.js');

describe('GET /health', () => {
  const app = Fastify();

  beforeAll(async () => {
    routes(app);
    await app.ready();
  });

  afterAll(() => app.close());

  test('should return status OK', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/health',
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: 'OK' });
  });
});
