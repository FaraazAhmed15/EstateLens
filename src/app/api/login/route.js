// app/api/login/route.js
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // 🔹 Connect to MySQL
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "", // your MySQL root password
      database: "housing", // same DB as signup
    });

    // 🔹 Check if user exists
    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    await connection.end();

    if (rows.length === 0) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful!" });
  } catch (err) {
    console.error("Login API Error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}