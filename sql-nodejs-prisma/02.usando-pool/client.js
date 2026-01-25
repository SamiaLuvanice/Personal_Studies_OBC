const { Client } = require("pg")

const client = new Client({
    connectionString: 'postgresql://postgres:1797@localhost:5433/node_postgres',
});

async function openConnection() {
    await client.connect();

    const result = await client.query("SELECT 1 + 1  AS resultado");
    console.log(result.rows);

    setTimeout(() => {
        client.end();
        console.log("Connection closed...");
    }, 5000);
}

openConnection();
