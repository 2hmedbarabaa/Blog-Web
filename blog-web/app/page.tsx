import Image from 'next/image';

const posts = [
  {
    title: "Living Light: The Minimalist Lifestyle and its Environmental Impact",
    date: "2 Feb, 2024",
    category: "minimalism",
    image: "/images/posts/post2.jpg",
  },
  {
    title: "Elevating Your Style with Minimal Environmental Footprint",
    date: "2 Feb, 2024",
    category: "minimalism",
    image: "/images/posts/post3.jpg",
  },
  {
    title: "Designing Tranquility: How Minimalist Spaces Support Eco-Friendly Living",
    date: "2 Feb, 2024",
    category: "minimalism",
    image: "/images/posts/post4.jpg",
  },
  {
    title: "Wander Wisely: Sustainable Travel Tips for the Minimalist Explorer",
    date: "2 Feb, 2024",
    category: "minimalism",
    image: "/images/posts/post5.jpg",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold">Starter - a Minimalist Personal Blog Template.</h1>
      <p className="text-gray-600 mt-2">
        “Starter” is a well starter theme designed for Ghost (CMS), 11ty, Astro, and many other site generators.
      </p>

      <div className="mt-6">
        <Image
          src="/images/posts/post1.jpg"
          alt="Exploring the mountains"
          width={800}
          height={400}
          className="rounded-lg mx-auto"
        />
      </div>
      <p className="text-gray-500 text-sm mt-2">Exploring the mountains in Indonesia - Unsplash</p>

      <h2 className="text-2xl font-semibold mt-10 text-left">Recent Publications</h2>
      <div className="mt-4 grid gap-6">
        {posts.map((post, index) => (
          <div key={index} className="flex gap-4 items-center">
            <Image src={post.image} alt={post.title} width={80} height={80} className="rounded-md" />
            <div className="text-left">
              <p className="text-sm text-gray-500">{post.date} • {post.category}</p>
              <h3 className="text-lg font-medium">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 px-6 py-2 border rounded-lg text-gray-700">View More</button>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>© 2024 nrk9819</p>
        <p>
          This theme is designed by <a href="#" className="underline">nrk9819</a>. Download the Figma file from <a href="#" className="underline">Dribbble</a>.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="underline">Mastodon</a>
          <a href="#" className="underline">Dribbble</a>
          <a href="#" className="underline">GitHub</a>
        </div>
        <div className="mt-2">
          <a href="#" className="underline">Privacy Policy</a> • <a href="#" className="underline">Terms and Conditions</a>
        </div>
      </footer>
    </div>
  );
}
