import Image from "next/image";
import styles from "./page.module.css";
import TopSlider from "@/components/Pages/Home/TopSlider";
import HeroGrid from "@/components/Pages/Home/HeroGrid";
import TopSponserAd from "@/components/Ads/TopSponserAd";
import EditorsPick from "@/components/Pages/Home/EditorsPick";
import NewsLetterBox from "@/components/Pages/Home/NewsLetterBox";
import SocialMediaList from "@/components/Pages/Home/SocialMediaList";
import NewsSliderMiddle from "@/components/Pages/Home/NewsSliderMiddle";
import MostPopular from "@/components/Pages/Home/MostPopular";
import GeneralNews from "@/components/Pages/Home/GeneralNews";
import BottomSlider from "@/components/Pages/Home/BottomSlider";
import SelectedNews from "@/components/Pages/Home/SelectedNews";

export default function Home() {
  return (
    <>
      <TopSlider />
      <HeroGrid />
      <TopSponserAd/>
      <EditorsPick/>
      <NewsLetterBox/>
      <SocialMediaList/>
      {/* <NewsSliderMiddle/> */}
      <SelectedNews/>
      <MostPopular/>
      <GeneralNews/>
      <BottomSlider/>
    </>
  );
}
