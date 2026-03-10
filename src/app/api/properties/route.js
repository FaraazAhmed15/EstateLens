import mysql from "mysql2/promise";
import { filterProperties } from "@/lib/filterProperties";

export async function GET(req) {

  try {

    const { searchParams } = new URL(req.url);

    const filters = {
      location: searchParams.get("location"),
      type: searchParams.get("type"),
      category: searchParams.get("category"),
      budget: searchParams.get("budget"),
      bhk: searchParams.get("bhk")
    };

    const { query, values } = filterProperties(filters);

    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "housing"
    });

    const [rows] = await db.execute(query, values);

    return Response.json(rows || []);

  } catch (error) {

    console.error("API ERROR:", error);

    return Response.json({ error: "Server error" }, { status: 500 });

  }

}