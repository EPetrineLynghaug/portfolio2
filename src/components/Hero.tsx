import React from 'react';
// @ts-ignore: Allow importing JPG files without type declarations
import heroImage from '../assets/img/about/heroimage.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative text-white flex justify-center">
      {/* Image container with fixed aspect ratio and overlay */}
      <div className="relative w-full max-w-4xl aspect-video">
        <img
          src={heroImage}
          alt="Portrait of Petrine"
          className="w-full h-full object-cover rounded-2xl object-center"
        />
        {/* Text overlay positioned at the bottom of the image */}
        <div className="absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black/70 to-transparent p-4 md:p-8">
          <h1 className="text-xl md:text-4xl font-semibold">
         Hi, I’m Petrine <br /> I shape ideas with code.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;