// Hero.js
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-purple-gradient text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Empower Your Creativity with Imagine AI
        </h2>
        <p className="text-lg mb-8">
          Generate code, images, and chat effortlessly.
        </p>
        <Link href="/dashboard">
          <button className="bg-purple-100 hover:bg-purple-200 text-black py-2 px-6 rounded-lg shadow-lg transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
