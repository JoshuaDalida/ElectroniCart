import React, { useState, useEffect } from 'react';
import { prisma } from "./utils/prisma"
import Product from './components/Product';

async function getData() {
  const data = await prisma.product.findMany(
    {
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        imageURL: true
      }
    }
  )
  return data;
}

const Home = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex-grow">
        <main className="flex flex-col justify-center items-center">
          <div className="flex flex-row flex-wrap justify-center items-center bg-white">
            {data.map((product) => (
              <div className="m-4" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </main>
      </div>

    </div>
  );
}

export default Home;