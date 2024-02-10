const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon!</h1>
        <p className="text-lg text-white mb-8">
          Stay tuned for exciting updates
        </p>
        <div className="flex justify-center">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-1 animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full mr-1 animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
