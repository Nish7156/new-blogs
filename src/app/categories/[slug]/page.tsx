import CategoriesPage from "@/components/Pages/Categories";
import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";
import React from "react";

async function SingleCategory({ params }: { params: { slug: string } }) {
  async function getBlogByCategory() {
    try {
      const res = await fetch(
        //@ts-ignore
        `${checkEnvironment()}/api/blogs/${params?.slug}`,
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
  const data = await getBlogByCategory();

  return (
    <div>
      <CategoriesPage data={data} />
    </div>
  );
}

export default SingleCategory;
