
const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
        <p className="text-lg text-gray-600 mb-8">Stay tuned for exciting updates</p>
        <div className="flex justify-center">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-800 rounded-full mr-1 animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full mr-1 animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;