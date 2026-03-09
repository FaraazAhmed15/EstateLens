import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function POST(req) {

  const { page_path } = await req.json();

  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "housing",
  });

  const [rows] = await db.execute(
    "SELECT contact_owner FROM properties WHERE page_path = ?",
    [page_path]
  );

  await db.end();

  if (rows.length > 0) {
    return NextResponse.json({ number: rows[0].contact_owner });
  }

  return NextResponse.json({ message: "Number not found" }, { status: 404 });
}