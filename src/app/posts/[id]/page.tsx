import Image from 'next/image';
import Header from '@/components/Header'; // Ensure the Header component exists in the specified path
import Footer from '@/components/Footer'; // Ensure the Footer component exists in the specified path

// Dummy data
const posts = [
  {
    id: '1',
    title: 'The Girl from Ipanema',
    image: '/b1.png',
    content: 'dfs',
    likes: 123,
    views: 456,
    comments: 78,
  },
  {
    id: '2',
    title: 'Post 2 Title',
    image: '/b2.png',
    content: 'Content for Post 2',
    likes: 50,
    views: 200,
    comments: 30,
  },
  {
    id: '3',
    title: 'Post 3 Title',
    image: '/b3.png',
    content: 'Content for Post 3',
    likes: 75,
    views: 300,
    comments: 40,
  },
];

// Dynamic metadata
export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

const PostDetail = ({ params }: { params: { id: string } }) => {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Header />
      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={500}
          className="w-full object-cover"
        />
        <p className="mt-4">{post.content}</p>
        <div className="mt-4">
          <p>Likes: {post.likes}</p>
          <p>Views: {post.views}</p>
          <p>Comments: {post.comments}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetail;
