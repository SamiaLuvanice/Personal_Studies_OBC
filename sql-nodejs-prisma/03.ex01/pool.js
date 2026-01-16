// pool.js
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgresql://postgres:1797@localhost:5433/node_postgres",
});

async function query(queryString, params) {
    console.log("log: query executada -", queryString, params);
    return pool.query(queryString, params);
}

module.exports = { query, pool };
