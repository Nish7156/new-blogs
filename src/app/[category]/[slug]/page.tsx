import BlogDetails from "@/components/Pages/Categories/BlogDetails";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import React, { Suspense } from "react";
import type { Metadata } from "next";

async function getBlogByCategoryAndSlug(category: any, slug: any) {
  try {
    const res = await fetch(
      //@ts-ignore
      `${checkEnvironment()}/api/blogs/${category}/${slug}`,
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

// export async function generateStaticParams() {
//   const posts = await fetch(`${checkEnvironment()}/api/blogs`).then((res) =>
//     res.json()
//   );

//   return posts.map((post: any) => ({
//     category: post.category,
//     slug: post.slug,
//   }));
// }

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // fetch data
  const blog = await fetch(
    `${checkEnvironment()}/api/blogs/${params?.category}/${params?.slug}`
  ).then((res) => res.json());

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
      <Suspense fallback={<>Loading...</>}>
        <BlogDetails data={data} />
      </Suspense>
    </div>
  );
}

export default Blog;
