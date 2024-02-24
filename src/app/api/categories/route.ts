import clientPromise from "@/app/backend/database";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    const client: any = await clientPromise;
    const db = client.db();

    // Retrieve the blog posts sorted by their creation date in descending order
    const blogs = await db
      .collection("blogs")
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    // Initialize a map to store categories and their counts
    const categoriesMap = new Map();

    // Iterate through the sorted blog posts
    blogs.forEach((blog: any) => {
      // Increment the count for each category
      if (categoriesMap.has(blog.category)) {
        categoriesMap.set(blog.category, categoriesMap.get(blog.category) + 1);
      } else {
        categoriesMap.set(blog.category, 1);
      }
    });

    // Convert the map to an array of objects
    let categories = Array.from(categoriesMap, ([category, count]) => ({
      category,
      count,
    }));

    // Sort the categories based on the creation date of their most recent blog post
    categories.sort((a, b) => {
      // Get the most recent blog post for each category
      const latestPostA = blogs.find(
        (blog: { category: any }) => blog.category === a.category
      );
      const latestPostB = blogs.find(
        (blog: { category: any }) => blog.category === b.category
      );

      // Compare the creation dates
      //@ts-ignore
      return new Date(latestPostB.createdAt) - new Date(latestPostA.createdAt);
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories from MongoDB:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
