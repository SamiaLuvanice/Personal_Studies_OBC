const pg = require('pg');

const db = new pg.Client({
    connectionString: "postgresql://postgres:1797@localhost:5433/node_postgres"
});

async function createTable() {
    await db.connect();

    const query = `
        CREATE TABLE IF NOT EXISTS "public"."Pokemon" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            type VARCHAR(50) NOT NULL
        );
    `;

    try {
        await db.query(query);
        console.log("Table 'Pokemon' created successfully.");
    } catch (err) {
        console.error("Error creating table:", err);
    } finally {
        await db.end();
    }
}

createTable();
