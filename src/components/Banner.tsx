import React from 'react';
import Image from 'next/image';


const Banner = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[300px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <Image
        src='/banner.png'
        alt='Banner Background'
        fill
        quality={100}
        priority
        className='object-cover z-0'
      />

      {/* Overlay for Darker Effect */}
      <div className='absolute inset-0 bg-black opacity-30'></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-6 lg:px-8">
        {/* H4 Heading */}
        <h4 className="text-lg md:text-xl lg:text-3xl font-serif mb-2">Welcome to My Blog</h4>
        
        {/* H1 Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4">Explore the World</h1>
        
        {/* Paragraph */}
        <p className="text-sm md:text-lg lg:text-xl font-medium max-w-md md:max-w-lg lg:max-w-xl">
          Discover new adventures, savor the best cuisines, and embrace the beauty of the world around us.
        </p>
      </div>
    </div>
  );
};

export default Banner;
