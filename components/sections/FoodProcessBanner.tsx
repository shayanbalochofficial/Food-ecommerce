import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function FoodProcessBanner() {
  const processes = [
    "Premium Selection",
    "Expert Preparation",
    "Precise Cooking",
    "Artistic Plating",
    "Passionate Service",
  ];

  return (
    <section className="py-20 bg-foodbuck-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Our process"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foodbuck-black to-transparent opacity-30" />
          </div>

          <div className="animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-foodbuck-orange">Process</span>
            </h2>
            <p className="text-foodbuck-gray-muted text-lg mb-8">
              Every dish is a result of meticulous attention to detail and an
              unwavering commitment to excellence at every stage.
            </p>

            <div className="space-y-4">
              {processes.map((process, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-foodbuck-orange flex-shrink-0" />
                  <span className="text-white text-lg font-medium">
                    {process}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
