// import clientPromise from "../../../backend/database";

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

//----------------------------------------------------------------//
// List of categories
// import clientPromise from "../../../backend/database";
// import { NextResponse } from "next/server";

// export async function GET(request: any) {
//   try {
//     const client: any = await clientPromise;
//     const db = client.db();

//     const blogs = await db.collection("blogs").find().toArray();
//     const categories = Array.from(new Set(blogs.map((blog) => blog.category)));

//     return NextResponse.json(categories);
//   } catch (error) {
//     console.error("Error fetching categories from MongoDB:", error);
//     return NextResponse.json({ message: "Internal server error" });
//   }
// }
//----------------------------------------------------------------//

// category.ts
import clientPromise from "../../../backend/database";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
  const { category } = params;

  try {
    const client: any = await clientPromise;
    const db = client.db();

    const blogs = await db.collection("blogs").find({ category }).toArray();

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs from MongoDB:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
