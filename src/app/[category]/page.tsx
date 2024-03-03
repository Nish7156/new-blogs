import CategoriesPage from "@/components/Pages/Categories";
import Breadcrumb from "@/components/Pages/Categories/Breadcrumb";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import { capitalize, formatCategory } from "@/lib/helper";
import { Metadata } from "next";
import React, { Suspense } from "react";

async function getBlogByCategory(category: any) {
  try {
    const res = await fetch(
      //@ts-ignore
      `${checkEnvironment()}/api/blogs/${category}`,
      { cache: "no-store" }
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
//   const categories = await fetch(`${checkEnvironment()}/api/blogs`).then(
//     (res) => res.json()
//   );
//   return categories.map((item: any) => ({
//     category: item.category,
//   }));
// }

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: capitalize(formatCategory(params?.category)) || "Category",
    description:
      "Explore our wide range of categories and find exactly what you're looking for.",
    category: capitalize(params?.category),
  };
}

async function page({ params }: { params: { category: string } }) {
  const data = await getBlogByCategory(params?.category);
  return (
    <div>
      <Breadcrumb />
      <Suspense fallback={<>Loading...</>}>
        <CategoriesPage data={data} />
      </Suspense>
    </div>
  );
}

export default page;
