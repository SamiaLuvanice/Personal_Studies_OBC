const pg = require('pg');

// Conection string: protocolo://usuario:senha@host:porta/nome_banco
const db = new pg.Client({
    connectionString: 'postgresql://postgres:1797@localhost:5433/node_postgres',
});

async function selecPokemon() {
    await db.connect();

    const query = `SELECT * FROM "public"."Pokemon";`
    const result = await db.query(query);
    
    console.table(result.rows)

    await db.end();
}

selecPokemon();