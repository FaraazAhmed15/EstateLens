import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
import { loginValidation } from "@/lib/validation/loginValidation";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "housing",
    });

    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    await db.end();

    if (rows.length > 0) {
      return NextResponse.json({
        message: "Successfully done",
      });
    } else {
      return NextResponse.json({
        message: "Invalid user",
      });
    }

  } catch (error) {
    return NextResponse.json({
      message: "Server error",
    });
  }
}
