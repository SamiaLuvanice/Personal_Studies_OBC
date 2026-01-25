const {Pool} = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://postgres:1797@localhost:5433/node_postgres',
    max: 2
});

async function openConnection() {
    const client = await pool.connect();

    const result = await client.query("SELECT 1 + 1 AS soma");
    console.log(result.rows);

    setTimeout(() => {
        client.release();
        console.log("Connection released...");
    }, 3000);
}

openConnection();

setTimeout(() => {
    pool.end();
    console.log("Pool has ended 1...");
}, 4000);
openConnection();
