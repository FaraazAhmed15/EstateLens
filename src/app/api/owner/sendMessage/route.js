import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const { message, page_path, userName } = await req.json();

    if (!message || message.trim() === "") {
      return NextResponse.json(
        { message: "Message cannot be empty" },
        { status: 400 }
      );
    }

    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "housing",
    });

    await db.execute(
      "INSERT INTO messOwner (userName, page_path, message) VALUES (?,?,?)",
      [userName, page_path, message]
    );

    await db.end();

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (err) {
    console.error("Send Message Error:", err);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}