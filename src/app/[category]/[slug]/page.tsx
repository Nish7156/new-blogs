import BlogDetails from "@/components/Pages/Categories/BlogDetails";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import React, { Suspense } from "react";
import type { Metadata } from "next";
import blogData from "../../../lib/data.json";
import Breadcrumb from "@/components/Pages/Categories/Breadcrumb";

export async function generateStaticParams() {
  const posts = await fetch(`${checkEnvironment()}/api/blogs`).then((res) =>
    res.json()
  );

  return posts.map((post: any) => ({
    category: post.category,
    slug: post.slug,
  }));
}

async function getBlogByCategoryAndSlug(category: any, slug: any) {

  let url = `${checkEnvironment()}/api/blogs/${category}/${slug}`
  console.log(url);
  
  
  try {
    const res = await fetch(
      //@ts-ignore
     `${url}`
    );

    if (!res.ok) {
      console.log("error getBlogByCategoryAndSlug");
    }
    return res.json();
  } catch (error) {
    console.log(error, "message");
  }
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const blog = await getBlogByCategoryAndSlug(params?.category, params?.slug);

  return {
    title: blog?.title,
    description: blog?.description,
    category: blog?.category,
    openGraph: {
      images: blog?.image,
    },
  };
}

async function Blog({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const data = await getBlogByCategoryAndSlug(params.category, params?.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: data?.title,
    image: data?.image,
    description: data?.description,
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb />
      {data && <BlogDetails data={data} />}
    </div>
  );
}

export default Blog;
