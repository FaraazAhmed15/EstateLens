import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "housing",
};

export async function GET() {
  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute(
      "SELECT id, name, email, role, created_at FROM users"
    );

    await connection.end();

    return NextResponse.json(rows);
  } catch (error) {
    console.error("GET users error:", error);

    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  let connection;

  try {
    const body = await req.json();
    const { name, email, password } = body;

    connection = await mysql.createConnection(dbConfig);

    const [result] = await connection.execute(
      `INSERT INTO users (name, email, password, role, created_at)
       VALUES (?, ?, ?, 'admin', NOW())`,
      [name, email, password]
    );

    await connection.end();

    return NextResponse.json({
      success: true,
      id: result.insertId,
    });

  } catch (error) {
    console.error("POST user error:", error);

    if (connection) await connection.end();

    return NextResponse.json(
      { error: "Failed to add admin" },
      { status: 500 }
    );
  }
}