// import clientPromise from "../../../../backend/database";

// import { NextResponse } from "next/server";

// export async function GET(request: any, { params }: any) {
//   try {
//     const client: any = await clientPromise;
//     const db = client.db();

//     // const blogs = await db.collection("blogs").find({}).toArray();

//     return NextResponse.json(params);
//   } catch (error) {
//     console.error("Error fetching blogs from MongoDB:", error);
//     return NextResponse.json({ message: "Internal server error" });
//   }
// }

// mobiles.ts
import clientPromise from "../../../../backend/database";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
  const { category, slug } = params;

  try {
    const client: any = await clientPromise;
    const db = client.db();

    const blog = await db.collection("blogs").findOne({ category, slug });

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog from MongoDB:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
