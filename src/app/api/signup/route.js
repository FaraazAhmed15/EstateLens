import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req) {
  const { name, email, password, role } = await req.json();

  if (!name || !email || !password || !role) {
    return NextResponse.json(
      { message: "All fields required" },
      { status: 400 }
    );
  }

  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "housing"
    });

    await db.execute(
      "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",
      [name, email, password, role]
    );

    return NextResponse.json({ message: "Signup successful" });

  } catch (error) {
    return NextResponse.json(
      { message: "Database error" },
      { status: 500 }
    );
  }
}