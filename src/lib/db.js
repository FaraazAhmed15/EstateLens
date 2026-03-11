import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "wwerock",
  database: "estatelens"
});

export default db;