export function connectDB(app) {
    app.decorate('db', {
      // Später z.B. Verbindung zu pg-Pool
      query: async (sql) => {
        return { rows: [] }; // Dummy
      },
    });
  }
  