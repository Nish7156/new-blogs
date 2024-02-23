import BlogDetails from "@/components/Pages/Categories/BlogDetails";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import React from "react";

async function Blog({ params }: { params: { slug: string } }) {
  // console.log(params, "::");

  async function getBlogByCategoryAndSlug() {
    try {
      const res = await fetch(
        //@ts-ignore
        `${checkEnvironment()}/api/blogs/${params?.slug}/${params?.blog}`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        console.log("error");
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }
  const data = await getBlogByCategoryAndSlug();
  return (
    <div>
      <BlogDetails data={data} />
    </div>
  );
}

export default Blog;
