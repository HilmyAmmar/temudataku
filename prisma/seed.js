const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("test1234", 10);

  await prisma.user.create({
    data: {
      email: "admin@email.com",
      name: "Admin",
      hashedPassword,
    },
  });

  console.log("User created");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
