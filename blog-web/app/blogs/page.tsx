"use client";
// import { useEffect, useState } from "react";
// import { fetchPosts } from "@/src/client/api/postApi";

export default function BlogsPage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const getPosts = async () => {
//       try {
//         // const data = await fetchPosts();
//         // setPosts(data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };
//     getPosts();
//   }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Blogs</h1>
      <ul>
        {/* {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded mb-2">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
}
