import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",   // or 127.0.0.1
  user: "root",
  password: "",        // add your MySQL password if you have one
  database: "housing",
};

// GET all users (Feedback-style)
export async function GET() {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);

    // Fetch users
    const [rows] = await connection.execute(
      `SELECT id, name, email, role, created_at FROM users`
    );

    await connection.end();
    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET /api/admin/user error:", err);
    if (connection) await connection.end();
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}