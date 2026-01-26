const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:1797@localhost:5433/node_postgres",
});

async function query(queryString, params) {
  try {
    //console.log("Executing query: " + queryString);
    return await pool.query(queryString, params);
  } catch (error) {
    console.error("Query error:", error);
    throw error;
  }
}

module.exports = { query };
