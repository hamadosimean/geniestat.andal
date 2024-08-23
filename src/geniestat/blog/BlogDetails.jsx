import React from "react";
import { useParams } from "react-router-dom";
import BlogPostsData from "./BlogData"; // Assume this is where your blog posts data is stored
import Markdown from "react-markdown";
const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL parameters
  const blogPost = BlogPostsData.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 ">
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <p className="text-gray-600 mb-6">
          By {blogPost.author} on {blogPost.datePublished}
        </p>
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-80 md:h-full object-cover  mb-6"
        />
        <div className="prose">
          <Markdown>{blogPost.content}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
