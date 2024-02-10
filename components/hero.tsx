// Hero.js
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

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
          <Button variant="secondary">Get Started</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
