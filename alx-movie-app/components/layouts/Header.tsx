import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Movie App
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/movies" className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md">
              Movies
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
