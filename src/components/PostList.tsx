import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Post = {
  id: string;
  title: string;
  snippet: string;
  image: string;
};

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border p-4 rounded-md shadow-md bg-white transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-50"
        >
          <Link href={`/posts/${post.id}`}>
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover rounded-md cursor-pointer transform transition duration-300 ease-in-out hover:scale-110"
            />
          </Link>
          <h2 className="text-xl font-bold mt-4">{post.title}</h2>
          <p className="text-gray-700 mt-2">{post.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
