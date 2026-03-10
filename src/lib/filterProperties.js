export function filterProperties({ location, type, category, budget, bhk }) {

  let query = "SELECT DISTINCT * FROM properties WHERE 1=1";
  let values = [];

  /* LOCATION FILTER */
  if (location) {
    query += " AND location LIKE ?";
    values.push(`%${location}%`);
  }

  /* PROPERTY TYPE FILTER */
  if (type) {
    query += " AND type = ?";
    values.push(type);
  }

  /* CATEGORY FILTER */
  if (category) {
    query += " AND category = ?";
    values.push(category);
  }

  /* BHK FILTER */
  if (bhk) {
    query += " AND bhk = ?";
    values.push(parseInt(bhk));
  }

  /* BUDGET FILTER (USES price_value COLUMN) */

  if (budget === "Below50L") {
    query += " AND price_value < 5000000";
  }

  else if (budget === "50L-1Cr") {
    query += " AND price_value BETWEEN 5000000 AND 10000000";
  }

  else if (budget === "Above1Cr") {
    query += " AND price_value > 10000000";
  }

  return { query, values };

}