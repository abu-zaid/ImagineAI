const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white text-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold text-center mb-8 ">About Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg  leading-relaxed mb-6">
            Welcome to our AI generation website! We specialize in creating
            artificial intelligence models that generate code, images, and chat
            responses using advanced machine learning techniques.
          </p>
          <p className="text-lg  leading-relaxed mb-6">
            Our team of experts is dedicated to pushing the boundaries of AI
            technology to provide innovative solutions for a variety of
            industries. Whether you need automated code generation, image
            synthesis, or conversational AI, we have the tools and expertise to
            meet your needs.
          </p>
          <p className="text-lg  leading-relaxed mb-6">
            At our core, we believe in harnessing the power of AI to enhance
            productivity, creativity, and communication. We're passionate about
            making AI accessible and easy to use for everyone, regardless of
            their technical background.
          </p>
          <p className="text-lg  leading-relaxed mb-6">
            Thank you for choosing our AI generation platform. We're excited to
            see what amazing creations you'll bring to life with our technology!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
