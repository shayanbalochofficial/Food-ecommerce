import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FoodCategorySection from "@/components/sections/FoodCategorySection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import StatsSection from "@/components/sections/StatsSection";
import MenuHighlightsSection from "@/components/sections/MenuHighlightsSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FoodCategorySection />
      <WhyChooseUsSection />
      <StatsSection />
      <MenuHighlightsSection />
      <div className=""></div>
    </>
  );
};

export default page;
