const { Pool } = require("pg")

const pool = new Pool({
    connectionString: 'postgresql://postgres:1797@localhost:5433/node_postgres',
    max: 2
});

async function queryRapida() {
    const  result = await pool.query("SELECT 2 + 2 AS soma");
    console.log(result.rows);
}

setTimeout(() => {
    pool.end();
    console.log("Pool has ended...");
}, 2000);

queryRapida();
queryRapida();
queryRapida();
