import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker'; // Make sure to install faker

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create departments
  const departments = await prisma.department.createMany({
    data: [
      { name: 'Engineering' },
      { name: 'Human Resources' },
      { name: 'Marketing' },
      { name: 'Sales' },
      { name: 'Finance' },
    ],
  });

  console.log(`✅ Created ${departments.count} departments.`);

  // Fetch departments to assign employees
  const departmentList = await prisma.department.findMany();

  // Generate 50 employees
  const employees = await Promise.all(
    Array.from({ length: 50 }).map(() => {
      return prisma.employee.create({
        data: {
          firstname: faker.person.firstName(),
          lastname: faker.person.lastName(),
          idnumber: faker.number.int({ min: 1000, max: 9999 }),
          address: faker.location.streetAddress(),
          sss: faker.number.int({ min: 100000, max: 999999 }),
          philhealth: faker.number.int({ min: 100000, max: 999999 }),
          role: 'EMPLOYEE',
          departmentId: faker.helpers.arrayElement(departmentList).id, // Assign to a random department
        },
      });
    })
  );

  console.log(`✅ Created ${employees.length} employees.`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
