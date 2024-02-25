import CategoriesPage from "@/components/Pages/Categories";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import { Metadata } from "next";
import React from "react";

async function getBlogByCategory(category: any) {
  try {
    const res = await fetch(
      //@ts-ignore
      `${checkEnvironment()}/api/blogs/${category}`
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
  const posts = await fetch(`${checkEnvironment()}/api/blogs`).then((res) =>
    res.json()
  );
  return posts.map((blog: any) => ({
    category: blog.category,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // fetch data
  const category = await fetch(
    `${checkEnvironment()}/api/blogs/${params?.category}`
  ).then((res) => res.json());

  return {
    title: category?.title,
    description: category?.description,
    category: category?.category,
    openGraph: {
      images: category?.image,
    },
  };
}

async function SingleCategory({ params }: { params: { category: string } }) {
  const data = await getBlogByCategory(params?.category);

  return (
    <div>
      <CategoriesPage data={data} />
    </div>
  );
}

export default SingleCategory;
