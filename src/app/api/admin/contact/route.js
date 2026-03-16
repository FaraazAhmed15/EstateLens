import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "housing",
    });

    const [rows] = await connection.execute(
      `SELECT id, name, email, phone, message FROM contacts`
    );

    await connection.end();

    return NextResponse.json(rows);

  } catch (err) {
    console.error("Contact fetch error:", err);

    if (connection) await connection.end();

    return NextResponse.json(
      { error: "Failed to fetch contact" },
      { status: 500 }
    );
  }
}