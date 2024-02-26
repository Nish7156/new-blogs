import TopSlider from "@/components/Pages/Home/TopSlider";
import HeroGrid from "@/components/Pages/Home/HeroGrid";
import TopSponserAd from "@/components/Ads/TopSponserAd";
import { Suspense } from "react";
import EditorsPick from "@/components/Pages/Home/EditorsPick";
import NewsLetterBox from "@/components/Pages/Home/NewsLetterBox";
import SocialMediaList from "@/components/Pages/Home/SocialMediaList";
import SelectedNews from "@/components/Pages/Home/SelectedNews";
import MostPopular from "@/components/Pages/Home/MostPopular";
import GeneralNews from "@/components/Pages/Home/GeneralNews";
import AdCode from "./AdCode";

export default function Home() {
  return (
    <>
      <TopSlider />
      <Suspense fallback={<>Loading</>}>
        <HeroGrid />
      </Suspense>
      {/* <TopSponserAd /> */}
      <AdCode />
      <EditorsPick />
      <NewsLetterBox />
      <SocialMediaList />
      <div style={{ marginTop: "20px" }}></div>
      <SelectedNews />
      <MostPopular />
      <GeneralNews />
      {/* <BottomSlider/> */}
    </>
  );
}
