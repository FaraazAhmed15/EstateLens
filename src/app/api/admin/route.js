// Do NOT put "use client" here — this is server-side only
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "", // your MySQL password
  database: "housing",
};

// GET users
export async function GET() {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute(
      `SELECT id, name, email, role, created_at FROM users`
    );

    await connection.end();
    return NextResponse.json(rows);
  } catch (err) {
    console.error("Database error:", err);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

// POST new admin
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    const connection = await mysql.createConnection(dbConfig);

    const [result] = await connection.execute(
      `INSERT INTO users (name, email, password, role, created_at) 
       VALUES (?, ?, ?, 'admin', NOW())`,
      [name, email, password]
    );

    await connection.end();

    return NextResponse.json({ message: "Admin added successfully", id: result.insertId });
  } catch (err) {
    console.error("Database error:", err);
    return NextResponse.json({ error: "Failed to add admin" }, { status: 500 });
  }
}