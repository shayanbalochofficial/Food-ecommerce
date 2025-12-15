import Image from "next/image";
import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import MenuDetailClient from "@/components/MenuDetailClient";
import { menuItems } from "@/data/menu";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return menuItems.map((item) => ({
    slug: item.slug,
  }));
}

export default function MenuDetail({ params }: { params: { slug: string } }) {
  const item = menuItems.find((m) => m.slug === params.slug);

  if (!item) {
    return (
      <div className="pt-20 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Item Not Found</h1>
          <Link href="/menu">
            <span className="text-foodbuck-orange hover:text-foodbuck-orange/80">
              Back to Menu
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedItems = menuItems.filter(
    (m) => m.category === item.category && m.id !== item.id
  );

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/menu"
          className="flex items-center gap-2 text-foodbuck-orange hover:text-foodbuck-orange/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Menu
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-foodbuck-orange font-semibold text-sm mb-4 uppercase">
              {item.category}
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">{item.name}</h1>

            <p className="text-foodbuck-gray-muted text-lg leading-relaxed mb-8">
              {item.description}
            </p>

            <div className="mb-8">
              <p className="text-foodbuck-gray-muted text-sm mb-2">
                SERVING SIZE
              </p>
              <p className="text-white text-lg">{item.servingSize}</p>
            </div>

            <div className="mb-8">
              <p className="text-foodbuck-gray-muted text-sm mb-3">
                INGREDIENTS
              </p>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="bg-foodbuck-black-surface text-white text-sm px-3 py-2 rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <MenuDetailClient item={item} />
          </div>
        </div>

        {relatedItems.length > 0 && (
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Related <span className="text-foodbuck-orange">Items</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedItems.slice(0, 3).map((relatedItem) => (
                <MenuCard
                  key={relatedItem.id}
                  id={relatedItem.id}
                  name={relatedItem.name}
                  slug={relatedItem.slug}
                  price={relatedItem.price}
                  description={relatedItem.description}
                  image={relatedItem.image}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
