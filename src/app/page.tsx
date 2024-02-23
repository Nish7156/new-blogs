import TopSlider from "@/components/Pages/Home/TopSlider";
import HeroGrid from "@/components/Pages/Home/HeroGrid";
import TopSponserAd from "@/components/Ads/TopSponserAd";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <TopSlider />
      <Suspense fallback={<>Loading</>}>
        <HeroGrid />
      </Suspense>
      <TopSponserAd />
      {/* <EditorsPick />
      <NewsLetterBox />
      <SocialMediaList />
      <SelectedNews /> */}
      {/* <MostPopular/>
      <GeneralNews/>
      <BottomSlider/> */}
    </>
  );
}
