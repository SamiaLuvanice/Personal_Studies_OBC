require("dotenv").config();
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("@prisma/client");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.post.createMany({
    data: [
      {
        title: "Olá, mundo!",
        content: "This is the content of my first post created with prisma.",
        published: true,
      },
      {
        title: "My second post",
        content: null,
      },
    ],
  });
}

main().then(async () => {
  const result = await prisma.post.findMany();
  console.table(result);
});
