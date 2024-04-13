import React, { useState, useEffect } from 'react';
import { prisma } from "../utils/prisma"

import Header from '../components/Header';
import Footer from '../components/Footer';
import Product from '../components/Product';

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
        <Header />
      <div className="flex-grow">
        <main className="flex flex-col justify-center items-center">
          <div className="flex flex-row flex-wrap justify-center items-center bg-white">
            {data.map((product, id) => (
              <div key={id} className="m-4">
                <Product product={product} />
            </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

