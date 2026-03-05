import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "your_mysql_user",
  password: "your_mysql_password",
  database: "estate_lens",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// GET: fetch properties with filters
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const location = searchParams.get("location");
    const type = searchParams.get("type");
    const bhk = searchParams.get("bhk");
    const minBudget = searchParams.get("minBudget");
    const maxBudget = searchParams.get("maxBudget");

    let query = "SELECT * FROM properties WHERE 1=1";
    const params = [];

    if (location) { params.push(location); query += " AND location=?"; }
    if (type) { params.push(type); query += " AND type=?"; }
    if (bhk) { params.push(Number(bhk)); query += " AND bhk=?"; }
    if (minBudget) { params.push(Number(minBudget)); query += " AND budget >= ?"; }
    if (maxBudget) { params.push(Number(maxBudget)); query += " AND budget <= ?"; }

    const [rows] = await pool.execute(query, params);
    return NextResponse.json(rows);

  } catch (err) {
    console.error("Error fetching properties:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// POST: add a new property
export async function POST(req) {
  try {
    const data = await req.json();
    const { title, type, category, location, bhk, budget, description } = data;

    const query = `
      INSERT INTO properties (title, type, category, location, bhk, budget, description)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [title, type, category, location, bhk || null, budget, description || null];

    const [result] = await pool.execute(query, params);

    return NextResponse.json({ message: "Property added", id: result.insertId });
  } catch (err) {
    console.error("Error adding property:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}