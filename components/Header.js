'use client'
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-gray-100 py-4 w-full p-8">
      <div className="w-full flex justify-between items-center px-4">
        <a href="/" className="text-2xl font-bold text-gray-800 no-underline">ElectroniCart</a>
        
        <nav className="flex justify-center gap-4">
          <ul className="flex gap-4">
            <li>
              <a className="text-gray-600 hover:text-gray-800">Home</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">About</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Profile</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Favourites</a>
            </li>
            <button>
              <img src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg' alt="Cart Icon" className='h-6' />
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
