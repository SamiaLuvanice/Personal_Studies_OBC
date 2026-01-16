const pg = require('pg');

// Conection string: protocolo://usuario:senha@host:porta/nome_banco
const db = new pg.Client({
    connectionString: 'postgresql://postgres:1797@localhost:5433/node_postgres',
});

async function createTable() {
    await db.connect();

    const query = `
    CREATE TABLE IF NOT EXISTS "public"."Pokemon" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255)
    );
    `;

    const result = await db.query(query);
    console.log(result);

    await db.end();
}

createTable();