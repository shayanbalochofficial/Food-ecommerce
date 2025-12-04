import { ChefHat, Leaf, Award, Sparkles } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUsSection() {
  const features: Feature[] = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Expert Chefs",
      description:
        "Our culinary team consists of Michelin-trained professionals with decades of combined experience.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Farm Fresh",
      description:
        "We source locally and seasonally, partnering directly with trusted farmers and producers.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description:
        "Recognized internationally for culinary excellence and innovative dining experiences.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Quality",
      description:
        "Unwavering commitment to quality in every detail, from ingredients to presentation.",
    },
  ];

  return (
    <section className="py-20 bg-foodbuck-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why <span className="text-foodbuck-orange">Choose</span> Us
          </h2>
          <p className="text-foodbuck-gray-muted text-xl max-w-2xl mx-auto">
            We don&apos;t just serve food—we create memories through exceptional
            cuisine and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-slide-up bg-foodbuck-black-card rounded-2xl border border-foodbuck-black-surface p-8 hover:border-foodbuck-orange/50 transition-all duration-300 hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-foodbuck-orange mb-4">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-foodbuck-gray-muted text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
