const mysql = require("mysql2/promise");

const waitForDB = async () => {
  let connected = false;

  while (!connected) {
    try {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      });

      await connection.end();
      console.log("✅ MySQL is ready!");
      connected = true;
    } catch (err) {
      console.log("⏳ Waiting for MySQL...");
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
};

waitForDB();