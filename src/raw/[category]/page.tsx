import CategoriesPage from "@/components/Pages/Categories";
import Breadcrumb from "@/components/Pages/Categories/Breadcrumb";
import { capitalize, formatCategory } from "@/lib/helper";
import { Metadata } from "next";
import React, { Suspense } from "react";
import blogData from "../../lib/data.json";

async function getBlogByCategory(category: string) {
  return blogData.filter((blog) => blog.category === category) || [];
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    params: {
      category: post.category,
    },
  }));
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
      <Suspense fallback={<>Loading...</>}>
        {/* <CategoriesPage data={data} /> */}
        <div className="">dddd</div>
      </Suspense>
    </div>
  );
}

export default page;
