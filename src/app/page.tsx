import TopSlider from "@/components/Pages/Home/TopSlider";
import HeroGrid from "@/components/Pages/Home/HeroGrid";
import TopSponserAd from "@/components/Ads/TopSponserAd";
import EditorsPick from "@/components/Pages/Home/EditorsPick";
import NewsLetterBox from "@/components/Pages/Home/NewsLetterBox";
import SocialMediaList from "@/components/Pages/Home/SocialMediaList";
import MostPopular from "@/components/Pages/Home/MostPopular";
import GeneralNews from "@/components/Pages/Home/GeneralNews";
import BottomSlider from "@/components/Pages/Home/BottomSlider";
import SelectedNews from "@/components/Pages/Home/SelectedNews";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <TopSlider />
      <Suspense fallback={<>Loading</>}>
        <HeroGrid />
      </Suspense>
      <TopSponserAd />
      <EditorsPick />
      <NewsLetterBox />
      <SocialMediaList />
      <SelectedNews />
      {/* <MostPopular/>
      <GeneralNews/>
      <BottomSlider/> */}
    </>
  );
}
