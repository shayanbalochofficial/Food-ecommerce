"use client";

import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/menu";
import { useCart } from "@/context-cart/CartContext";
import { toast } from "sonner";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { addItem } = useCart();

  const categories = [
    { id: "all", label: "All" },
    { id: "appetizers", label: "Appetizers" },
    { id: "mains", label: "Main Courses" },
    { id: "desserts", label: "Desserts" },
    { id: "drinks", label: "Beverages" },
  ];

  const filtered =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem(item, 1);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="bg-foodbuck-black-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Our <span className="text-foodbuck-orange">Menu</span>
          </h1>
          <p className="text-foodbuck-gray-muted text-xl">
            Discover our exquisitely curated selection of dishes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-foodbuck-black">
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start text-foodbuck-black">
          {categories.map((cart) => (
            <Button
              key={cart.id}
              onClick={() => setSelectedCategory(cart.id)}
              variant={selectedCategory === cart.id ? "default" : "outline"}
              className={
                selectedCategory === cart.id
                  ? "bg-foodbuck-orange text-foodbuck-black"
                  : ""
              }
            >
              {cart.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <MenuCard
              key={item.id}
              id={item.id}
              name={item.name}
              slug={item.slug}
              price={item.price}
              description={item.description}
              image={item.image}
              onAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
