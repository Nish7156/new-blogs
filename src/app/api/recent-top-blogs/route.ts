import clientPromise from "../../backend/database";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    const client: any = await clientPromise;
    const db = client.db();

    // Aggregate pipeline to fetch only 4 recent public blogs sorted by views
    const blogs = await db.collection("blogs").aggregate([
      // Match only public blogs where is_public is true
      { $match: { is_public: true } },
      // Sort by views in descending order
      { $sort: { views: -1 } },
      // Limit to 4 documents
      { $limit: 4 },
      // Project fields to include in the result
      { $project: { _id: 0, image: 1, slug: 1, title: 1, dateline: 1,category: 1 } }
    ]).toArray();

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs from MongoDB:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
