const Adds = () => {
  return (
    <div className="space-y-4">
      {/* Ad 1: Premium Tech Gadget */}
      <div className="card bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
        <figure className="px-6 pt-6">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 w-full flex justify-center">
            <span className="text-4xl">📱</span>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">Pro Max Ultra</h2>
          <p className="text-sm opacity-90">
            Experience cutting-edge technology
          </p>
          <div className="card-actions pt-4">
            <button className="btn btn-primary btn-sm">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Ad 2: Travel & Adventure */}
      <div className="card bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg">
        <figure className="px-6 pt-6">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 w-full flex justify-center">
            <span className="text-4xl">✈️</span>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">
            Dream Vacation with Nirjhor Akash
          </h2>
          <p className="text-sm opacity-90">Explore the world with us</p>
          <div className="card-actions pt-4">
            <button className="btn btn-warning btn-sm">Book Travel</button>
          </div>
        </div>
      </div>

      {/* Ad 3: Online Learning */}
      <div className="card bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
        <figure className="px-6 pt-6">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 w-full flex justify-center">
            <span className="text-4xl">📚</span>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">Master New Skills</h2>
          <p className="text-sm opacity-90">Learn from industry experts</p>
          <div className="card-actions pt-4">
            <button className="btn btn-secondary btn-sm">Enroll Now</button>
          </div>
        </div>
      </div>

      {/* Ad 4: Fitness & Wellness */}
      <div className="card bg-gradient-to-br from-green-400 to-teal-500 text-white shadow-lg">
        <figure className="px-6 pt-6">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 w-full flex justify-center">
            <span className="text-4xl">💪</span>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-bold">Fit & Healthy</h2>
          <p className="text-sm opacity-90">Transform your lifestyle today</p>
          <div className="card-actions pt-4">
            <button className="btn btn-accent btn-sm">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adds;
