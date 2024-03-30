import TopSlider from "@/components/Pages/Home/TopSlider";
import HeroGrid from "@/components/Pages/Home/HeroGrid";
import EditorsPick from "@/components/Pages/Home/EditorsPick";
import TopSponserAd from "@/components/Ads/TopSponserAd";
import blogData from "../lib/data.json"

export default async function Home() {
  return (
    <>
      <TopSlider />
      <HeroGrid data={blogData.slice(0,5)} />
      <TopSponserAd />
      <EditorsPick data={blogData} />
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
