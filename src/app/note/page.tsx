import Link from "next/link";
import React from "react";

async function getBlogByCategory() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!res.ok) {
      console.log("error");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function Note() {
  const data = await getBlogByCategory();
  return (
    <div>
      {data.map((data: any) => {
        return (
          <div className="" key={data.id}>
            <Link href={`/note/${data.id}`}>{data.title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Note;
