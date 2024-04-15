const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

app.get('/api/products', async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
});

// Don't forget to start your server
app.listen(3001, () => console.log('Server running on http://localhost:3001'));