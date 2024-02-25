import CategoriesPage from "@/components/Pages/Categories";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import { capitalize, formatCategory } from "@/lib/helper";
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
  const categories = await fetch(`${checkEnvironment()}/api/blogs`).then(
    (res) => res.json()
  );
  return categories.map((item: any) => ({
    category: item.category,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: capitalize(formatCategory(params?.category)) || "Category",
    description:
      "Explore our wide range of categories and find exactly what you're looking for.",
    category: capitalize(params?.category),
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
