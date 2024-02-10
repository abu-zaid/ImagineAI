// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-purple-gradient text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Imagine AI</h1>
        <nav>
          <ul className="flex">
            <li className="ml-4"><a href="#" className="hover:text-gray-300">Features</a></li>
            <li className="ml-4"><a href="#" className="hover:text-gray-300">About</a></li>
            <li className="ml-4"><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
