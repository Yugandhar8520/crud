//importing the mysql2/promise for using async await in conenction function and in querys
const mysql = require("mysql2/promise");

//the async await function which connects to the database using the credentials in the .env files
const ConnectDB = async () => {
  const pool = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: process.env.DB_WAITFORCONNECTIONS,
    connectionLimit: process.env.DB_CONNECTIONLIMIT,
    queueLimit: process.env.DB_QUEUELIMIT
  });


  return pool;
};

//exporting the function
module.exports = ConnectDB;
