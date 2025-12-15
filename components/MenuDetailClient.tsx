"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context-cart/CartContext";
import { toast } from "sonner";
import { Plus, Minus } from "lucide-react";
import { MenuItem } from "@/data/menu";

interface MenuDetailClientProps {
  item: MenuItem;
}

export default function MenuDetailClient({ item }: MenuDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item, quantity);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="flex flex-col flex-grow p-6">
      <div>
        <p className="text-foodbuck-gray-muted text-sm mb-8">QUANTITY</p>
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="w-4 h-4 text-foodbuck-black" />
          </Button>
          <span className="text-white text-2xl font-semibold w-12 text-center">
            {quantity}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="w-4 h-4 text-foodbuck-black " />
          </Button>
        </div>

        <div className="flex items-baseline gap-4 mb-8">
          <span className="text-5xl font-bold text-foodbuck-orange">
            ${(item.price * quantity).toFixed(2)}
          </span>
          <span className="text-foodbuck-gray-muted text-lg">
            ${item.price.toFixed(2)} each
          </span>
        </div>

        <Button
          onClick={handleAddToCart}
          className="bg-foodbuck-orange hover:bg-foodbuck-orange/90 text-foodbuck-black font-semibold py-6 text-lg w-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
