import { Cake, Flame, Utensils, Wine } from "lucide-react";
import React from "react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const FoodCategorySection = () => {
  const categories: Category[] = [
    {
      id: "appetizers",
      name: "Appetizers",
      icon: <Utensils className="w-12 h-12" />,
      description:
        "Expertly crafted smol plates to begin your culinary journey.",
    },
    {
      id: "mains",
      name: "Mains",
      icon: <Flame className="w-12 h-12" />,
      description:
        "Signature dishes that showcase our chef's artistry and skill.",
    },
    {
      id: "desserts",
      name: "Desserts",
      icon: <Cake className="w-12 h-12" />,
      description:
        "Sweet creations that provide the perfect ending to your meal.",
    },
    {
      id: "drinks",
      name: "Beverages",
      icon: <Wine className="w-12 h-12" />,
      description: "Carefully selected wines, cocktails and specialty drinks.",
    },
  ];
  return (
    <section className="py-20 bg-foodbuck-black-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Food <span className="text-foodbuck-orange">Categories</span>
          </h2>
          <p className="text-foodbuck-gray-muted text-xl max-w-2xl mx-auto">
            Explore our diverse menu organized by type and cuisine.
          </p>
              </div>
              {/*  */}
              <div className=""></div>
      </div>
    </section>
  );
};

export default FoodCategorySection;
