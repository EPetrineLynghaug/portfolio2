 // @ts-ignore: Allow importing JPG files without type declarations
import React from 'react';
import heroImage from '../assets/img/about/heroimage.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative text-white transition-colors flex items-end justify-center min-h-[70vh] md:min-h-screen">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Portrait of Petrine"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content positioned lower with responsive padding */}
      <div className="relative p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Hi, I'm Petrine — creating user-friendly, responsive websites.
        </h1>
      </div>
    </section>
  );
};

export default Hero;