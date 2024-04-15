'use client'
import React, { useEffect, useState } from 'react';
import LoginButton from './LoginButton';
import SignOutButton from './Signout';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSignOut = () => {
    setIsLoggedIn(false);
  };
  useEffect(() => {
    if (session) {
      console.log(session.user?.email)
      setIsLoggedIn(true);
    }
  }, [session]);

  return (
    <header className="bg-white border-b border-gray-200 py-4 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="text-3xl font-bold text-gray-800 no-underline hover:text-gray-600 transition-colors">
            ElectroniCart
          </a>
          <nav className="hidden sm:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a className="text-gray-600 hover:text-blue-500" href='/'>Home</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-500" href='/about'>About</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-500" href='/profile'>Profile</a>
              </li>
              <li>
                <button className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
                  <img src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg' alt="Cart Icon" className='h-6' />
                </button>
              </li>
              {isLoggedIn ? (
                <li>
                  <SignOutButton onClick={handleSignOut} />
                </li>
              ) : (
                <li>
                  <LoginButton />
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

