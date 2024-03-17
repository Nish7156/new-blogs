import TopSlider from "@/components/Pages/Home/TopSlider";
import HeroGrid from "@/components/Pages/Home/HeroGrid";
import TopSponserAd from "@/components/Ads/TopSponserAd";
import { Suspense } from "react";
import EditorsPick from "@/components/Pages/Home/EditorsPick";
import NewsLetterBox from "@/components/Pages/Home/NewsLetterBox";
import SocialMediaList from "@/components/Pages/Home/SocialMediaList";
import blogData from "../lib/data.json";


export default async function Home() {
  return (
    <>
      <TopSlider />
      <Suspense fallback={<>Loading</>}>
        <HeroGrid data={blogData} />
      </Suspense>
      <TopSponserAd />
      <EditorsPick data={blogData} />
      <NewsLetterBox />
      <SocialMediaList />
      {/* <div style={{ marginTop: "20px" }}></div> */}
      {/* <SelectedNews /> */}
      {/* <MostPopular /> */}
      {/* <GeneralNews /> */}
      {/* <BottomSlider/> */}
    </>
  );
}
