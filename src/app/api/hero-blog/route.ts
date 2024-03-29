import clientPromise from "../../backend/database";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    const client: any = await clientPromise;
    const db = client.db();

    // Retrieve the last 20 objects from the database
    const blogs = await db.collection("blogs").find({}).toArray();

    // Store the last 20 objects in an array
    const last10Blogs = blogs.slice(-10);

    // Generate 5 random indices
    const randomIndices: number[] = [];
    while (randomIndices.length < 5) {
      const randomIndex = Math.floor(Math.random() * last10Blogs.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    // Retrieve the 5 random objects from the array
    const randomBlogs = randomIndices.map((index) => last10Blogs[index]);

    return NextResponse.json(randomBlogs);
  } catch (error) {
    console.error("Error fetching blogs from MongoDB:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
