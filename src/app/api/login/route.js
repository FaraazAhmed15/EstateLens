import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "housing",
    });

    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email = ? AND password = ? AND role = ?",
      [email, password, role]
    );

    await db.end();

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Invalid login or role" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "Login successful",
      name: rows[0].name,
      role: rows[0].role
    });

  } catch (error) {
    console.error("Login API error:", error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}