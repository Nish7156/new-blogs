import TopSlider from "@/components/Pages/Home/TopSlider";
import HeroGrid from "@/components/Pages/Home/HeroGrid";
import blogData from "../lib/data.json";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    params: {
      category: post.category,
    },
  }));
}
export default async function Home() {
  return (
    <>
      <TopSlider />
      <HeroGrid data={blogData} />
      {/* <TopSponserAd />
      <EditorsPick data={blogData} />
      <NewsLetterBox />
      <SocialMediaList /> */}
      {/* <div style={{ marginTop: "20px" }}></div> */}
      {/* <SelectedNews /> */}
      {/* <MostPopular /> */}
      {/* <GeneralNews /> */}
      {/* <BottomSlider/> */}
    </>
  );
}
