import TopSlider from "@/components/Pages/Home/TopSlider";
import HeroGrid from "@/components/Pages/Home/HeroGrid";
import { getEditoresBlogs, getHeroBlogs } from "@/lib/load-blogs";
import EditorsPick from "@/components/Pages/Home/EditorsPick";
import TopSponserAd from "@/components/Ads/TopSponserAd";

export default async function Home() {
  const blogData=await getHeroBlogs()
  const editosNewwBlogs=await getEditoresBlogs()
  return (
    <>
      <TopSlider />
      <HeroGrid data={blogData} />
      <TopSponserAd />
      <EditorsPick data={editosNewwBlogs} />
      {/* <NewsLetterBox />
      <SocialMediaList /> */}
      {/* <div style={{ marginTop: "20px" }}></div> */}
      {/* <SelectedNews /> */}
      {/* <MostPopular /> */}
      {/* <GeneralNews /> */}
      {/* <BottomSlider/> */}
    </>
  );
}
