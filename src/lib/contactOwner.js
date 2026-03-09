// src/lib/contactOwner.js
import mysql from "mysql2/promise";

// Send message to owner
export async function sendMessageToOwner({ message, userName }) {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "housing",
  });

  await db.execute(
    "INSERT INTO messages (user_name, message) VALUES (?, ?)",
    [userName, message]
  );

  await db.end();
}

// Get owner number
export async function getOwnerNumber() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "housing",
  });

  const [rows] = await db.execute("SELECT number FROM owner LIMIT 1");
  await db.end();

  if (rows.length > 0) return rows[0].number;
  return "Not available";
}