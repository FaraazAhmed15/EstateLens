// Do NOT put "use client" here — server-side only
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const body = await req.json();
    const ownerName = body.ownerName;

    if (!ownerName) {
      return NextResponse.json({ error: "Owner name is required" }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",      // your MySQL password
      database: "housing",
    });

    // Fetch properties belonging to this owner
    const [rows] = await connection.execute(
      `SELECT id, title, location, type, category, price, budget, bhk, image, page_path, price_value
       FROM properties
       WHERE TRIM(LOWER(owner_name)) = TRIM(LOWER(?))`,
      [ownerName]
    );

    // Attach messages for each property
    for (let i = 0; i < rows.length; i++) {
      const prop = rows[i];
      const [msgRows] = await connection.execute(
        `SELECT id, userName , page_path, message
         FROM messOwner
         WHERE page_path = ?`,
        [prop.page_path]
      );
      prop.messages = msgRows; // multiple messages can come
    }

    await connection.end();

    return NextResponse.json(rows);
  } catch (err) {
    console.error("Database error:", err);
    return NextResponse.json({ error: "Failed to fetch properties" }, { status: 500 });
  }
}