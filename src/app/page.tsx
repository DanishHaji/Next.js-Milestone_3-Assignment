import Header from "@/components/Header";
import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import PostList from "@/components/PostList";


const post = [
    {
        id:'1',
        title: 'The Girl from Ipanema',
        image: '/b1.png',
        snippet:'Strolling down the sun-drenched beaches of Rio de Janeiro....',
    },
    {
        id:'2',
        title: 'The Mexico Diary, Day 1: Oaxaca',
        image: '/b2.png',
        snippet:'Our adventure in Oaxaca began with an explosion of colors, flavors, and history....',
    },
    {
        id:'3',
        title: 'Mykonos with Mr. & Mrs. Smith',
        image: '/b3.png',
        snippet:'When it comes to luxury escapes, few places rival Mykonos....',
    },
];

export default function Home () {
    return (
        <div>
            <Header />
            <Banner />
            <HeroSection />
            <TrustedBySection />
            {/* Add the PostList component */}
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Latest Blogs...</h1>
                <PostList posts={post} />
            </div>

        </div>
    )
}