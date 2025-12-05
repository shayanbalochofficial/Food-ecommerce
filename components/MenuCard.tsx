import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MenuCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  onAddToCart?: () => void;
}

export default function MenuCard({
  id,
  name,
  slug,
  price,
  description,
  image,
  onAddToCart,
}: MenuCardProps) {
  return (
    <div className="group bg-foodbuck-black-card rounded-2xl overflow-hidden border border-foodbuck-black-surface hover:border-foodbuck-orange/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foodbuck-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-foodbuck-orange transition-colors">
          {name}
        </h3>

        <p className="text-foodbuck-gray-muted text-sm mb-4 flex-grow line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-foodbuck-orange font-bold text-xl">
            ${price.toFixed(2)}
          </span>
        </div>

        <div className="flex gap-2">
          <Link href={`/menu/${slug}`} className="flex-1">
            <Button variant="outline" className="w-full text-foodbuck-black hover:text-foodbuck-orange-light">
              View Details
            </Button>
          </Link>
          {onAddToCart && (
            <Button
              onClick={onAddToCart}
              className="flex-1 bg-foodbuck-orange hover:bg-foodbuck-orange/90 text-foodbuck-black"
            >
              Add
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
