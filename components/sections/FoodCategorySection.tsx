import { Utensils, Flame, Cake, Wine } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

export default function FoodCategorySection() {
  const categories: Category[] = [
    {
      id: "appetizers",
      name: "Appetizers",
      icon: <Utensils className="w-12 h-12" />,
      description:
        "Expertly crafted small plates to begin your culinary journey.",
    },
    {
      id: "mains",
      name: "Main Courses",
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
      description: "Carefully selected wines, cocktails, and specialty drinks.",
    },
  ];

  return (
    <section className="py-20 bg-foodbuck-black-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Food <span className="text-foodbuck-orange">Cateogories</span>
          </h2>
          <p className="text-foodbuck-gray-muted text-xl max-w-2xl mx-auto">
            Explore our diverse menu organized by type and cuisine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="animate-slide-up bg-foodbuck-black rounded-2xl border border-foodbuck-black-surface p-8 text-center hover:border-foodbuck-orange/50 transition-all duration-300 hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4 text-foodbuck-orange">
                {category.icon}
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">
                {category.name}
              </h3>
              <p className="text-foodbuck-gray-muted text-base leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
