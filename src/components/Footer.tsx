import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* First Section: Social Links */}
      <div className="flex flex-wrap justify-center bg-blue-500 text-white space-x-6 sm:space-x-10 py-4 border-b border-blue-300">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-gray-400" aria-label="social link">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-gray-400" aria-label="social link">
          <FaInstagram />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-gray-400" aria-label="social link">
          <FaPinterest />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-gray-400" aria-label="social link">
          <FaTwitter />
        </a>
      </div>

      {/* Second Section: Images with Hover Effect */}
      <div className="py-6 bg-blue-500 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border-2 border-white hover:shadow-lg transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={`/footer/f${index + 1}.png`} // Replace with the actual image paths
              alt={`Image ${index + 1}`}
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Third Section: About Me and Mailing List */}
      <div className="flex flex-col lg:flex-row items-start justify-between py-8 px-4 sm:px-6 space-y-8 lg:space-y-0 lg:space-x-8 bg-blue-500">
        {/* About Me Section */}
        <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 w-full lg:w-1/2">
          <Image
            src="/profile.png"
            alt="About Me"
            width={150}
            height={150}
            layout='intrinsic'
            quality={90}
            className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-white object-cover mx-auto sm:mx-0"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">About Me</h3>
            <p className="text-sm sm:text-lg text-white mt-2">
              I&apos;m a passionate blogger who loves to explore and share new experiences. From traveling to trying out
              different cuisines, I bring my adventures to life through my blog.
            </p>
            <button className="mt-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-400 hover:text-white transition">
              Read More
            </button>
          </div>
        </div>

        {/* Mailing List Section */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Join My Mailing List</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-3/4 px-4 py-2 rounded text-black"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="check" className="w-4 h-4" />
              <label htmlFor="check" className="text-sm sm:text-base text-white">
                I agree to receive updates and offers
              </label>
            </div>
            <button
              type="submit"
              className="w-full sm:w-3/4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-400 hover:text-white transition"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl hover:text-gray-200" aria-label="social link">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl hover:text-gray-200" aria-label="social link">
              <FaInstagram />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl hover:text-gray-200" aria-label="social link">
              <FaPinterest />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl hover:text-gray-200" aria-label="social link">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-500 text-center py-4">
        <hr className="border-t-1 border-white mb-4 mx-8" />
        <p className="text-sm sm:text-base text-white">
          &copy; {new Date().getFullYear()} Dani Blogs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
