export function filterProperties({ location, type, category, budget, bhk }) {
  let query = "SELECT DISTINCT * FROM properties WHERE 1=1"; // DISTINCT avoids duplicates
  let values = [];

  // Apply only if the field has a value
  if (location) {
    query += " AND location LIKE ?";
    values.push(`%${location}%`); // partial match
  }

  if (type) {
    query += " AND type = ?";
    values.push(type);
  }

  if (category) {
    query += " AND category = ?";
    values.push(category);
  }

  if (bhk) {
    query += " AND bhk = ?";
    values.push(bhk);
  }

  // Budget filter
  if (budget === "Below50L") {
    query += " AND price < 5000000";
  } else if (budget === "50L-1Cr") {
    query += " AND price BETWEEN 5000000 AND 10000000";
  } else if (budget === "Above1Cr") {
    query += " AND price > 10000000";
  }

  return { query, values };
}