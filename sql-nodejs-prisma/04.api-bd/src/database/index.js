const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:1797@localhost:5433/node_postgres",
});

async function query(queryString, params, callback) {
  return pool.query(queryString, params, callback);
}

module.exports = {
  query,
};
