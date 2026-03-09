import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body; // ADDED phone

    // VALIDATION
    if (!name || name.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    // ADDED PHONE VALIDATION
    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        { success: false, error: "Valid phone number is required" },
        { status: 400 }
      );
    }

    if (!message || message.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    // MYSQL CONNECTION
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // INSERT DATA
    await db.execute(
      "INSERT INTO contacts (name,email,phone,message) VALUES (?,?,?,?)",
      [name, email, phone, message]
    );

    return NextResponse.json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}