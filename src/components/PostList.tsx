import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PostList = ({ posts }: { posts: Array<{ id: string; title: string; snippet: string; image: string }> }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.snippet}</p>
            <Link href={`/posts/${post.id}`}
              className="text-blue-500 mt-4 inline-block">Read more...
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
