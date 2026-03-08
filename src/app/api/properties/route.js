import { filterProperties } from "@/lib/filterProperties"
import mysql from "mysql2/promise"

export async function GET(req) {

  const { searchParams } = new URL(req.url)

  const filters = {
    location: searchParams.get("location"),
    type: searchParams.get("type"),
    bhk: searchParams.get("bhk"),
    budget: searchParams.get("budget"),
  }

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "housing"
  })

  const [rows] = await connection.execute(
    "SELECT * FROM properties"
  )

  const filteredData = filterProperties(rows, filters)

  return Response.json(filteredData)
}