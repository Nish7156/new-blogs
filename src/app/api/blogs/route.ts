import clientPromise from "../../backend/database";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    const client: any = await clientPromise;
    const db = client.db();

    const blogs = await db.collection("blogs").find({}).toArray();

    // Create a map to store unique blogs based on slug
    const uniqueBlogsMap = new Map();

    // Iterate through blogs and add them to the map using slug as key
    for (const blog of blogs) {
      uniqueBlogsMap.set(blog.slug, blog);
    }

    // Extract values from the map to get unique blogs
    const uniqueBlogs = Array.from(uniqueBlogsMap.values());

    return NextResponse.json(uniqueBlogs);
  } catch (error) {
    console.error("Error fetching blogs from MongoDB:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
