import React, { useState, useEffect } from 'react';
import { prisma } from "./utils/prisma"
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow">
        <main className="flex flex-col justify-center items-center pt-8">
          <div className="flex flex-row flex-wrap justify-center items-stretch gap-4 p-4 bg-white">
            {data.map((product, id) => (
              <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
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

