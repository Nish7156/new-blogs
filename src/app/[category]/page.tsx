import CategoriesPage from "@/components/Pages/Categories";
import Breadcrumb from "@/components/Pages/Categories/Breadcrumb";
import { capitalize, formatCategory } from "@/lib/helper";
import { Metadata } from "next";
import React, { Suspense } from "react";
import blogData from "../../lib/data.json";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";

export async function generateStaticParams() {
  const categories = await fetch(`${checkEnvironment()}/api/blogs`).then(
    (res) => res.json()
  );  
  return categories.map((item: any) => ({
    category: item.category,
  }));
}

async function getBlogByCategory(category: any) {
  try {
    const res = await fetch(
      //@ts-ignore
      `${checkEnvironment()}/api/blogs/${category}`
    );
    if (!res.ok) {
      console.log("error getBlogByCategory");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const category = params?.category || "";
  return {
    title: capitalize(formatCategory(category)) || "Category",
    description:
      "Explore our wide range of categories and find exactly what you're looking for.",
    category: capitalize(category),
  };
}

async function page({ params }: { params: { category: string } }) {
  const data = await getBlogByCategory(params?.category);

  return (
    <div>
      <Breadcrumb />
      <CategoriesPage data={data} />
    </div>
  );
}

export default page;
