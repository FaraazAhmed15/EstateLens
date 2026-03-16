// app/api/admin/feedback/route.js
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",       // your MySQL password
  database: "housing",
};

export async function GET() {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);

    // match table columns exactly
    const [rows] = await connection.execute(
      "SELECT id, username, message FROM feedback"
    );

    await connection.end();
    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET /api/admin/feedback error:", err);
    console.log("Database connection error:", err);
    if (connection) await connection.end();
    return NextResponse.json({ error: "Failed to fetch feedback" }, { status: 500 });
  }
}