import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between py-8 px-28 bg-blue-100 lg:space-x-20">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-6">About Me</h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Welcome to my world of adventures! I am Dani, a passionate blogger who loves to explore and share unique 
          experiences. Traveling is my escape - it allows me to discover new cultures, meet fascinating people, 
          and embrace the beauty of the world. I’m also a foodie at heart, always on the hunt for mouthwatering 
          cuisines that tell a story of their own. Relaxation plays a big role in my life; whether it’s enjoying 
          the serenity of nature or cozying up with a good book, I believe in the art of unwinding. Through my 
          blog, I share my journey, combining my love for traveling, eating, relaxing, and writing. Thank you 
          for being part of this adventure!
        </p>
        <div className="text-gray-700">
          <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
          <p>Email: <a href="mailto:dani@example.com" className="text-blue-500 hover:underline">dani@example.com</a></p>
          <p>ID: DaniBlogs123</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-10">
        <Image
          src="/profile.png"
          alt="Dani Profile Picture"
          width={550}
          height={500}
          className=" border-4 border-blue-500 shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
