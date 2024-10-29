import React from "react";
import BlogPostsData from "./BlogData";
import { Link } from "react-router-dom";
import GoToTopButton from "../components/goToTop";
const Blog = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Notre Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {BlogPostsData.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              Lire la suite
            </Link>
          </div>
        ))}
      </div>
      <GoToTopButton />
    </div>
  );
};

export default Blog;
