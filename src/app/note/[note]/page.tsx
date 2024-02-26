import CategoriesPage from "@/components/Pages/Categories";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import React from "react";

async function getBlogByCategory(category: any) {
  try {
    const res = await fetch(`${checkEnvironment()}/api/blogs/${category}`);
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
    note: item?.category.toString(),
  }));
}

async function SingleNote({ params }: any) {
  console.log(params);
  const data = await getBlogByCategory(params.note);

  return (
    <div>
      <CategoriesPage data={data || []} />
    </div>
  );
}

export default SingleNote;
