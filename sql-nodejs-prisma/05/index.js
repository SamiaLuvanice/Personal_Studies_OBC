require("dotenv").config();
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("@prisma/client");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.user.create({
    data: {
      name: "Sâmia",
      email: "samia@email.com",
      posts: {
        create: [
          {
            title: "My first post",
            content: "This is my first post content",
            slug: "my-first-post",
          },
        ],
      },
    },
  });

  const result = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  
  console.log(result, result[0].posts);
}

main();
