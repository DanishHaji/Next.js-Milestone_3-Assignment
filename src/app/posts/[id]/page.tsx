'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation'; // Use useParams for dynamic routing
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';

type Post = {
  id: string;
  title: string;
  content: string;
  comments: string[];
  likes: number;
  image: string;
};

const PostDetailPage = () => {
  const { id } = useParams(); // Retrieve the dynamic ID from the URL

  const mockPosts: Post[] = [
    {
      id: '1',
      title: 'The Girl from Ipanema',
      content: "The Girl from Ipanema is more than a melody; it’s a living, breathing ode to the iconic beach and its unparalleled charm. As the soft samba beats resonate in the background, the golden sands of Ipanema Beach invite you to take in a piece of paradise. The sky paints itself in hues of orange and pink, reflecting on the waves gently kissing the shore. The scene is vibrant yet soothing, an ideal balance of calm and energy. Walking along the famed beach promenade, you encounter a symphony of life—vendors selling chilled coconut water, artists sketching the breathtaking coastline, and joggers blending into the rhythm of the city's heartbeat. In the distance, the majestic peaks of Dois Irmãos (Two Brothers) loom like guardians of the city, offering a hike that rewards you with one of the most stunning panoramic views in the world. But Ipanema is not confined to its beach. It spills over into its culture-rich neighborhoods, where chic boutiques line the streets, and contemporary art galleries showcase Brazil's creative pulse. At sunset, grab a spot at a lively café for a caipirinha, Brazil’s signature cocktail, while the sounds of bossa nova transport you to a place where time slows down. The night is when Rio de Janeiro truly comes alive. From the infectious samba beats at nearby Lapa to the vibrant nightlife dotting Ipanema, you’ll find yourself dancing under the stars, celebrating life in the most Brazilian way possible. This journey is not just about experiencing Ipanema; it’s about becoming part of its timeless story.",
      comments: ['Great post!', 'Very informative!'],
      likes: 1,
      image: '/b1.png',
    },
    {
      id: '2',
      title: 'The Mexico Diary, Day 1: Oaxaca',
      content: "Oaxaca—an enchanting city that feels like stepping into a living painting. On Day 1 of our journey, we dove headfirst into the heart of this culturally rich gem in southern Mexico. The morning began with the fragrance of freshly roasted coffee beans wafting through the air, pulling us toward a cozy café tucked between colonial-era buildings adorned with vibrant bougainvillea. The taste of locally grown Oaxacan coffee was earthy and bold, a perfect start to the day. Our next stop was the Mercado de Benito Juárez, a sensory overload of sights, smells, and sounds. Vendors enthusiastically called out to us, offering tasters of mole negro, the region's famed dark chocolatey sauce, and chapulines—crispy grasshoppers seasoned with chili and lime, a local delicacy. The market was a treasure trove of culture, with handwoven textiles, intricate alebrijes (colorful wooden carvings of mythical creatures), and the warm smiles of artisans eager to share their stories In the afternoon, we ventured to Monte Albán, one of the oldest Mesoamerican cities. Perched atop a mountain, the ancient ruins offered awe-inspiring views of the Oaxaca Valley. As we stood among the stone pyramids and terraces, we felt the echoes of the Zapotec civilization, their architectural genius and spiritual energy still alive in the wind. The day culminated in a traditional Oaxacan feast at a local family-run restaurant. Mole-covered chicken, freshly made tortillas, and the smoky flavor of mezcal danced on our taste buds. Under the soft glow of string lights, we learned the history behind the dishes and the meaning of 'Guelaguetza'—the Oaxacan spirit of giving and community. Day 1 was not just an exploration of Oaxaca; it was an immersion into its heart and soul",
      comments: ['Awesome!', 'Nice post!'],
      likes: 10,
      image: '/b2.png',
    },
    {
      id: '3',
      title: 'Mykonos with Mr. & Mrs. Smith',
      content: "Mykonos is a dream, and when explored with Mr. & Mrs. Smith, it becomes a luxurious reality. This dazzling island in the Aegean Sea is where ancient history meets modern elegance. From the moment our ferry docked at the port, the view of whitewashed buildings cascading down the hillside, contrasted against the deep azure of the sea, left us breathless. Our first stop was Chora, Mykonos' main town, a labyrinth of narrow cobblestone streets designed to confuse pirates but now offering a magical place to get blissfully lost. Bougainvillea draped over doorways, and quaint cafes beckoned us with the aroma of fresh pastries and strong Greek coffee. Each turn revealed charming surprises—boutiques selling hand-embroidered linens, art galleries showcasing modern interpretations of Greek mythology, and, of course, the iconic windmills that stand as silent sentinels over the town. Lunch was a luxurious affair at a seaside taverna. The sunlit terrace, the sound of waves crashing, and a table laden with grilled octopus, freshly caught fish, and tzatziki made it a feast for all the senses. Mykonos knows how to pamper its guests, and we savored every bite. For those craving solitude, we found hidden beaches accessible only by boat, where the water was so clear it felt like we were floating on air. Psarou Beach offered luxury with its plush sun loungers and world-class service, while Fokos Beach was the perfect escape for tranquil moments and stunning views. As the sun dipped below the horizon, painting the sky in fiery shades of orange and purple, we headed to Little Venice. Here, cocktail in hand, we watched the Aegean waves lap at the buildings, feeling as though we were in a dream. The nightlife was electric, with rooftop bars and dance clubs offering a mix of international beats and Greek flair, keeping the energy alive until dawn. Mykonos isn’t just a destination—it’s an experience. It’s where romance, adventure, and indulgence come together to create memories that linger long after the trip ends. Whether you’re relaxing on its serene beaches or soaking in the vibrant nightlife, Mykonos ensures you’ll leave a piece of your heart behind.",
      comments: ['I want to be there!', 'How romantic they were!'],
      likes: 3,
      image: '/b3.png',
    },
  ];

  const post = mockPosts.find((post) => post.id === id);

  const [comments, setComments] = useState<string[]>(post?.comments || []); // State for comments
  const [newComment, setNewComment] = useState(''); // State for new comment input
  const [isLiked, setIsLiked] = useState(false); // State for like toggle
  const [likes, setLikes] = useState<number>(post?.likes || 0); // State for likes

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() === '') return; // Prevent empty comments
    setComments([...comments, newComment]); // Add new comment to state
    setNewComment(''); // Clear the input field
  };

  // Handle deleting a comment
  const handleDeleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index)); // Remove the comment at the specified index
  };

  // Handle like/unlike functionality
  const handleToggleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1); // Update the likes count
    setIsLiked(!isLiked);
  };

  if (!post) return <p>Post not found</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-gray-700 mb-4 text-justify">{post.content}</p>

      {/* Like Button */}
      <div className="flex items-center mb-6">
        <button onClick={handleToggleLike} className="text-2xl mr-2 focus:outline-none">
          {isLiked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart className="text-gray-500" />}
        </button>
        <span className="text-gray-700">
          {likes} {likes === 1 ? 'Like' : 'Likes'}
        </span>
      </div>

      {/* Comments Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Comments</h2>
        <ul className="mb-4">
          {comments.map((comment, index) => (
            <li key={index} className="mb-2 flex justify-between items-center border-b pb-2">
              <p>{comment}</p>
              <button
                onClick={() => handleDeleteComment(index)}
                className="text-red-500 text-sm focus:outline-none"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* Add Comment Input */}
        <div className="flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="border p-2 rounded-md w-full"
          />
          <button
            onClick={handleAddComment}
            className="bg-green-500 text-white px-4 py-2 rounded-md ml-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
