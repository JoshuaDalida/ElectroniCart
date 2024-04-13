"use client"
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
 return (
  <nav className="flex justify-center gap-4">
  <ul className="flex gap-4">
    <li>
      <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
    </li>
    <li>
      <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
    </li>
    <li>
      <Link to="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link>
    </li>
    <li>
      <Link to="/favourites" className="text-gray-600 hover:text-gray-800">Favourites</Link>
    </li>
    <li>
      <Link to="/cart">
        <button>
          <img src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg' alt="Cart Icon" className='h-6' />
        </button>
      </Link>
    </li>
  </ul>
</nav>
 );
}

export default Navigation;
