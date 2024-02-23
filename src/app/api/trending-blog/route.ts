import clientPromise from "../../backend/database";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    const client: any = await clientPromise;
    const db = client.db();

    // Retrieve the last 20 objects from the database
    const blogs = await db.collection("blogs").find({}).toArray();

    // Store the last 20 objects in an array
    const last20Blogs = blogs.slice(-20);

    // Generate 5 random indices
    const randomIndices: number[] = [];
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * last20Blogs.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    // Retrieve the 5 random objects from the array
    const randomBlogs = randomIndices.map((index) => last20Blogs[index]);

    return NextResponse.json(randomBlogs);
  } catch (error) {
    console.error("Error fetching blogs from MongoDB:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
