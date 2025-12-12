import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ChefSection from "@/components/sections/ChefSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import MenuHighlightsSection from "@/components/sections/MenuHighlightsSection";

export const metadata = {
  title: "About FoodBuck",
  description:
    "Learn about FoodBuck's culinary journey and commitment to excellence.",
};

export default function About() {
  return (
    <div className="pt-20">
      <AboutSection />
      <WhyChooseUsSection />
      <ChefSection />
      <TestimonialSection />
      <MenuHighlightsSection />
    </div>
  );
}
