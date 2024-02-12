import React from "react";

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" rounded-lg p-8 bg-gradient-to-tr from-blue-500 to-purple-700 text-white">
            <h3 className="text-xl font-bold mb-4">Code Generation</h3>
            <p>
              Generate code snippets for various programming languages using
              advanced AI models.
            </p>
          </div>
          <div className=" rounded-lg p-8 bg-gradient-to-tr from-blue-500 to-purple-700 text-white">
            <h3 className="text-xl font-bold mb-4">Image Generation</h3>
            <p>
              AI-powered image synthesis for creating stunning visuals and
              artwork.
            </p>
          </div>
          <div className=" rounded-lg p-8 bg-gradient-to-tr from-blue-500 to-purple-700 text-white">
            <h3 className="text-xl font-bold mb-4">Chat Generation</h3>
            <p>
              Conversational AI to simulate human-like interactions and
              responses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
