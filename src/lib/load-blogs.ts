import { checkEnvironment } from "@/components/Utilty/checkEnvironment ";

export async function getHeroBlogs() {
  try {
    const res = await fetch(`${checkEnvironment()}/api/hero-blog`);
    if (!res.ok) {
      console.log("error -> getHeroBlogs");
    }
    return res.json();
  } catch (error) {
    console.log(error,"getHeroBlogs");
  }
}

export async function getEditoresBlogs() {
  try {
    const res = await fetch(`${checkEnvironment()}/api/blogs`);
    if (!res.ok) {
      console.log("error -> getEditoresBlogs");
    }
    return res.json();
  } catch (error) {
    console.log(error,"getEditoresBlogs");
  }
}
