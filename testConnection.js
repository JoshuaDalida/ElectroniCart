const { prisma } = require('./utils/prisma'); // Adjust the path according to your project structure

async function testConnection() {
 try {
    // Replace 'Product' with the name of one of your models
    const products = await prisma.product.findMany();
    console.log('Connected to the database successfully.');
    console.log('Products:', products);
 } catch (error) {
    console.error('Error connecting to the database:', error);
 } finally {
    await prisma.$disconnect();
 }
}

testConnection();
