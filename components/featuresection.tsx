const FeatureSection = () => {
  return (
    <section className="py-16 flex-1 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="flex justify-center items-center">
          <div className="w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-2">Code Generation</h3>
            <p>Automatically generate code snippets.</p>
          </div>
          <div className="w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-2">Image Generation</h3>
            <p>Create stunning images with AI.</p>
          </div>
          <div className="w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-2">Chat Generation</h3>
            <p>Engage users with intelligent chatbots.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
