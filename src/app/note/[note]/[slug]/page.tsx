import BlogDetails from "@/components/Pages/Categories/BlogDetails";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import React from "react";

async function getBlogByCategory(category: any, slug: any) {
  try {
    const res = await fetch(
      `${checkEnvironment()}/api/blogs/${category}/${slug}`
    );
    if (!res.ok) {
      console.log("error");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function generateStaticParams() {
  const categories = await fetch(`${checkEnvironment()}/api/blogs`).then(
    (res) => res.json()
  );
  return categories.map((item: any) => ({
    note: item?.category,
    slug: item.slug,
  }));
}

async function SingleSlug({ params }: any) {
  console.log(params);
  const data = await getBlogByCategory(params.note, params.slug);
  return <div>
    <BlogDetails data={data}/>
  </div>;
}

export default SingleSlug;
