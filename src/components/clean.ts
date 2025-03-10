import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.employee.deleteMany(); // Delete all employees
  await prisma.department.deleteMany(); // Delete all departments
  console.log('✅ All data deleted.');
}

main()
  .catch((e) => {
    console.error('❌ Error deleting data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
