"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";

export default function MenuHighlightsSection() {
  const featured = menuItems.slice(0, 3);

  return (
    <section className="py-20 bg-foodbuck-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Signature <span className="text-foodbuck-orange">Dishes</span>
          </h2>
          <p className="text-foodbuck-gray-muted text-xl max-w-2xl mx-auto">
            Discover our most celebrated creations, crafted with precision and
            passion.
          </p>
        </div>
        

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featured.map((item, index) => (
            <div
              key={item.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MenuCard
                id={item.id}
                name={item.name}
                slug={item.slug}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/menu">
            <Button className="bg-foodbuck-orange hover:bg-foodbuck-orange/90 text-foodbuck-black font-semibold px-8 py-6 text-base">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
      {/*   hehe ha*/}
    </section>
  );
}
