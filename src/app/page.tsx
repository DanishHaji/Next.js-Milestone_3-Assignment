import React from 'react';
import Banner from '@/components/Banner';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import PostList from '@/components/PostList';

const HomePage = () => {
  // Mock posts to display in the PostList
  const mockPosts = [
    {
      id: '1',
      title: 'The Girl from Ipanema',
      snippet: 'The Girl from Ipanema is more than a...',
      image: '/b1.png',
    },
    {
      id: '2',
      title: 'The Mexico Diary, Day 1',
      snippet: 'Oaxaca—an enchanting city that feels like...',
      image: '/b2.png',
    },
    {
      id: '3',
      title: 'Mykonos with Mr. & Mrs. Smith',
      snippet: 'Mykonos is a dream, and when explored with...',
      image: '/b3.png',
    },
  ];

  return (
    <div>
      {/* Top sections */}
      <Banner />
      <HeroSection />
      <TrustedBySection />

      {/* Blog Posts section */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Latest Blogs...</h1>
        <PostList posts={mockPosts} />
      </div>
    </div>
  );
};

export default HomePage;
