import BlogDetails from "@/components/Pages/Categories/BlogDetails";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import React from "react";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const blog = await fetch(
    `${checkEnvironment()}/api/blogs/${params?.slug}/${params?.blog}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog?.title,
    description: blog?.description,
    category: blog?.category,
    openGraph: {
      images: [`${blog?.image}`, ...previousImages],
    },
  };
}

async function Blog({ params }: { params: { slug: string } }) {
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data?.name,
    image: data?.image,
    description: data?.description,
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetails data={data} />
    </div>
  );
}

export default Blog;
