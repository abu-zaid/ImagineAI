// Header.js
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-purple-gradient text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <h1 className="text-2xl font-bold">Imagine AI</h1>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex">
            <li className="ml-4">
            <Link href="/features">
                <Button variant='ghost'>Features</Button>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/about">
                <Button variant='ghost'>About</Button>
              </Link>
            </li>
            <li className="ml-4">
            <Link href="/contact">
                <Button variant='ghost'>Contact</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
