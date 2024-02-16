import BlogDetails from "@/components/Pages/Categories/BlogDetails";
import React from "react";

function Blog({ params }: { params: { slug: string } }) {
console.log(params);

  return (
    <div>
      <BlogDetails />
    </div>
  );
}

export default Blog;
