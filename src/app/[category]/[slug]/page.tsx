import BlogDetails from "@/components/Pages/Categories/BlogDetails";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import React, { Suspense } from "react";
import type { Metadata } from "next";
import blogData from "../../../lib/data.json";
import Breadcrumb from "@/components/Pages/Categories/Breadcrumb";

async function getBlogByCategoryAndSlug(category: any, slug: any) {
  return blogData.find(
    (blog) => blog.category === category && blog.slug === slug
  );
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    category: blog.category,
    slug: blog.slug,
  }));
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
      <BlogDetails data={data} />
    </div>
  );
}

export default Blog;
