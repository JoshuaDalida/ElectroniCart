// prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
 // Seed data for the Product model

 // Additional products
    await prisma.Product.create({
      data: {
        name: `11`,
        description: `Example 11.`,
        price:179.00,
        imageURL: 'https://via.placeholder.com/225',
      },
    });
 }

 console.log('Seeding completed');


main()
 .catch((e) => {
    console.error(e);
    process.exit(1);
 })
 .finally(async () => {
    await prisma.$disconnect();
 });
