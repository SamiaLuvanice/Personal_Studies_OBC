const pg = require("pg");

const connectionString = "postgresql://postgres:1797@localhost:5433/node_postgres";
const db = new pg.Client({ connectionString });

async function insertPokemon() {
  await db.connect();

  // EXEMPLO 1
  // Forma básica
  // const query = `
  //   INSERT INTO "public"."Pokemon" (name, type)
  //   VALUES ('Springatito', 'Grass')
  // `;
  // const resultado1 = await db.query(query);
  // console.log("Insert Result:", resultado1);

  // EXEMPLO 2
  // Dasos dinamicos de forma errada (vulneravel a SQL injection)
  // const name = "Fuecoco";
  // const type = "Fire";
  // const result2 = await db.query(
  //   `
  //   INSERT INTO "public"."Pokemon" (name, type)
  //   VALUES ('${name}', '${type}')
  // `
  // );
  // console.log("Parameterized Insert Result:", result2);

  // EXEMPLO 3
  const pokemon = { name: "Quaxly", type: "Water" };
  const result3 = await db.query(
    `
    INSERT INTO "public"."Pokemon" (name, type)
    VALUES ($1, $2)
  `,
    [pokemon.name, pokemon.type]
  );
  console.log("Safe Parameterized Insert Result:", result3);


  await db.end();

}

insertPokemon();
