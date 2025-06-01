
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <img
          src="https://via.placeholder.com/150?text=Petrine"
          alt="Portrait of Petrine"
          className="w-36 h-36 rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Hi, I'm Petrine — creating user-friendly, responsive websites.
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6 text-indigo-200 dark:text-gray-400">
          My Portfolio
        </h2>
      </div>
    </section>
  );
};

export default Hero;
