// prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
 // Seed data for the Product model

 // Additional products
    await prisma.Product.create({
      data: {
        name: `Airpods`,
        description: `With plenty of talk and listen time, voice-activated Siri access and an available wireless charging case, AirPods deliver an incredible wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic.`,
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
