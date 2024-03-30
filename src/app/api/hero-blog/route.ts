import clientPromise from "../../backend/database";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    const client: any = await clientPromise;
    const db = client.db();

    // Retrieve all blogs from the database
    const blogs = await db.collection("blogs").find({}).toArray();

    // Create a map to store unique blogs based on slug
    const uniqueBlogsMap = new Map();

    // Iterate through blogs and add them to the map using slug as key
    for (const blog of blogs) {
      uniqueBlogsMap.set(blog.slug, blog);
    }

    // Extract values from the map to get unique blogs
    const uniqueBlogs = Array.from(uniqueBlogsMap.values());

    // Check if there are more than 5 unique blogs, if yes, select 5 random ones
    const randomBlogs = uniqueBlogs.length > 5 ? getRandomBlogs(uniqueBlogs, 5) : uniqueBlogs;

    return NextResponse.json(randomBlogs);
  } catch (error) {
    console.error("Error fetching blogs from MongoDB:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

// Function to get a random subset of blogs
function getRandomBlogs(blogs: any[], count: number): any[] {
  const randomBlogs: any[] = [];
  const indices: number[] = [];

  // Generate 'count' random indices
  while (indices.length < count) {
    const randomIndex = Math.floor(Math.random() * blogs.length);
    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
      randomBlogs.push(blogs[randomIndex]);
    }
  }

  return randomBlogs;
}
