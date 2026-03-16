import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "", // your MySQL password
      database: "housing",
    });

    const [rows] = await connection.execute(
      `SELECT id, userName, page_path, message, created_at FROM messowner`
    );

    await connection.end();

    return NextResponse.json(rows);
  } catch (err) {
    console.error("Messages fetch error:", err);
    if (connection) await connection.end();
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}