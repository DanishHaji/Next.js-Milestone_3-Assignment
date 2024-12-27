'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaBars } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { TfiPinterest } from 'react-icons/tfi';
import { HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className='bg-gray-900 text-white py-4'>
        <div className='container mx-auto px-6 flex justify-between items-center'>
          {/* Left: Logo */}
          <div className='text-3xl font-bold font-sans'>
            Dani&apos;s Blog
          </div>

          {/* Center: Navigation */}
          <nav className='hidden md:flex space-x-20 font-sans text-xl'>
            <Link href="/" className='text-white hover:text-yellow-400'>Home</Link>
            <Link href="/about" className='text-white hover:text-yellow-400'>About</Link>
            <Link href="/videos" className='text-white hover:text-yellow-400'>Videos</Link>
          </nav>

          {/* Right: Icons */}
          <div className='hidden md:flex space-x-6 text-2xl'>
            <Link href="https://www.facebook.com/" className='text-white hover:text-yellow-400'>
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/" className='text-white hover:text-yellow-400'>
              <IoLogoInstagram />
            </Link>
            <Link href="https://www.pinterest.com/" className='text-white hover:text-yellow-400'>
              <TfiPinterest />
            </Link>
            <Link href="https://www.twitter.com/" className='text-white hover:text-yellow-400'>
              <FaTwitter />
            </Link>
          </div>

          {/* Menu Icon for Small Screens */}
          <div className='md:hidden'>
          <button
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              type='submit'
            >
              {isOpen ? <HiX className="text-white hover:text-yellow-400" /> : <FaBars className="text-white hover:text-yellow-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className='md:hidden flex flex-col justify-center space-y-4 mt-4 px-6 items-center'>
            <Link href="/" className='text-white hover:text-yellow-400'>Home</Link>
            <Link href="/about" className='text-white hover:text-yellow-400'>About</Link>
            <Link href="/video" className='text-white hover:text-yellow-400'>Videos</Link>
            <div className='flex space-x-6'>
              <Link href="https://www.facebook.com/" className='text-white hover:text-yellow-400'>
                <FaFacebookF />
              </Link>
              <Link href="https://www.instagram.com/" className='text-white hover:text-yellow-400'>
                <IoLogoInstagram />
              </Link>
              <Link href="https://www.pinterest.com/" className='text-white hover:text-yellow-400'>
                <TfiPinterest />
              </Link>
              <Link href="https://www.twitter.com/" className='text-white hover:text-yellow-400'>
                <FaTwitter />
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
