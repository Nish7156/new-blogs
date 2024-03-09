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
import { getHeroBlogs,getEditoresBlogs } from "@/lib/load-blogs";

export async function generateStaticParams() {
  const categories = await getEditoresBlogs().then((res) => res.json());
  return categories.map((item: any) => ({
    category: item.category,
    slug: item.slug,
  }));
}

export default async function Home() {
  const data=await getEditoresBlogs()
  return (
    <>
      <TopSlider />
      <Suspense fallback={<>Loading</>}>
        <HeroGrid  data={data}/>
      </Suspense>
      {/* <TopSponserAd /> */}
      <AdCode />
      <EditorsPick  data={data}/>
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
