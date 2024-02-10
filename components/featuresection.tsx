const FeatureSection = () => {
  return (
    <section className="py-16 flex-1 text-white h-full ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="flex justify-center items-center flex-col lg:flex-row">
          <div className="w-full md:w-1/3 p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Code Generation</h3>
            <p className="text-white/70 text-sm">Automatically generate code snippets.</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-2">Image Generation</h3>
            <p className="text-white/70 text-sm">Create stunning images with AI.</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-2">Chat Generation</h3>
            <p className="text-white/70 text-sm">Engage users with intelligent chatbots.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
