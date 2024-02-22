import clientPromise from "../../backend/database";

import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    const client: any = await clientPromise;
    const db = client.db();

    const blogs = await db.collection("blogs").find({}).toArray();

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs from MongoDB:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
