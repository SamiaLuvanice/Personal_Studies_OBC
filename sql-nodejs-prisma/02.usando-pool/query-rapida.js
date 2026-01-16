const { Pool } = require("pg")


const pool = new Pool({
    connectionString: 'postgresql://postgres:1797@localhost:5433/node_postgres',
    max: 2
});

async function queryRapida(params) {
    const result = await pool.query("SELECT 1 + 1 AS soma")
    console.log(result.rows[0])

    setTimeout(() => {
        console.log("Fechando conexão...")

    }, 3000)
};

queryRapida();
queryRapida();
queryRapida();