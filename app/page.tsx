import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FoodCategorySection from "@/components/sections/FoodCategorySection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import StatsSection from "@/components/sections/StatsSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FoodCategorySection />
      <WhyChooseUsSection />
      <StatsSection />
    </>
  );
};

export default page;
