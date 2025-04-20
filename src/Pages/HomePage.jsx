import React, { useEffect } from "react";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import AwarenessMethods from "../components/AwarenessMethods";
import BodySafetyEducation from "../components/BodySafetyEducation";
import SpecialNeedsBoundaries from "../components/SpecialNeedsBoundaries";
import SpecialNeedsQA from "../components/SpecialNeedsQA";
import StoryOne from "../components/StoryOne";
import StoryTwo from "../components/StoryTwo";
import Ending from "../components/Ending";
import HeroSection from "../components/HeroSection";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <AwarenessMethods />
      <BodySafetyEducation />
      <SpecialNeedsBoundaries />
      <SpecialNeedsQA />
      <StoryOne />
      <StoryTwo />
      <Ending />
    </>
  );
}

export default HomePage;
