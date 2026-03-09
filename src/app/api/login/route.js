import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to MySQL
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "", // your MySQL password
      database: "housing",
    });

    // Check if user exists
    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    await db.end();

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 🔹 Fix: send name as string, not object
    return NextResponse.json({
      message: "Login successful",
      name: rows[0].name, // use this for session
    });

  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}