export default function (app) {
    app.get('/ping', async () => {
      return { hello: 'world' };
    });
  }
  