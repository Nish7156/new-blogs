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

    // Initialize a set to store unique categories
    const uniqueCategories = new Set();

    // Iterate through the sorted blog posts to get unique categories
    const categories = blogs.reduce((acc: { category: any; count: number; }[], blog: { category: unknown; }) => {
      // Check if the category is already in the set
      if (!uniqueCategories.has(blog.category)) {
        // If not, add it to the set and push it to the result array
        uniqueCategories.add(blog.category);
        acc.push({ category: blog.category, count: 1 });
      } else {
        // If the category is already in the set, increment its count
        const existingCategory = acc.find((item) => item.category === blog.category);
        if (existingCategory) {
          existingCategory.count++;
        }
      }
      return acc;
    }, []);

    // Sort the categories based on the count of blog posts
    categories.sort((a: { count: number; }, b: { count: number; }) => b.count - a.count);

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories from MongoDB:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
