const { Pool } = require("pg")


const pool = new Pool({
    connectionString: 'postgresql://postgres:1797@localhost:5433/node_postgres',
    max:2
});

async function openConnestion() {
    const client = await pool.connect()

    const result = await client.query("SELECT 1 + 1 AS soma;")
    console.log(result.rows)

    setTimeout(() => {
        client.release()
        console.log("Fechando conexão...")
    }, 3000)
};

openConnestion()

setTimeout(() => {
    openConnestion()
}, 1000);