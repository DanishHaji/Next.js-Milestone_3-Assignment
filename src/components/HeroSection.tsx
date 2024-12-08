import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="py-10 px-6 md:px-8 lg:px-16 bg-gray-100">
      {/* Paragraph at the top */}
      <p className="text-center text-lg md:text-xl lg:text-2xl font-light mb-8">
        Discover the best experiences and adventures around the world. Dive into the essence of life&apos;s pleasures—explore breathtaking destinations, savor delectable dishes, and embrace ultimate relaxation.
      </p>

      {/* Image Container with tags */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Travel Image */}
        <div className="relative group w-full sm:w-72 md:w-80 lg:w-96 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="/blog1.png"
            alt="Travel"
            width={400}
            height={400}
            className="object-cover"
            priority
            quality={100}
          />
          {/* Tag */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl md:text-5xl font-bold">Travel</span>
          </div>
        </div>

        {/* Eat Image */}
        <div className="relative group w-full sm:w-72 md:w-80 lg:w-96 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="/blog2.png"
            alt="Eat"
            width={400}
            height={400}
            className="object-cover"
            priority
            quality={100}
          />
          {/* Tag */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl md:text-5xl font-bold">Eat</span>
          </div>
        </div>

        {/* Relax Image */}
        <div className="relative group w-full sm:w-72 md:w-80 lg:w-96 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="/blog3.png"
            alt="Relax"
            width={400}
            height={400}
            className="object-cover"
            priority
            quality={100}
          />
          {/* Tag */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl md:text-5xl font-bold">Relax</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
