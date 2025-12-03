import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-foodbuck-black overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Restaurant hero"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foodbuck-black via-foodbuck-black/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start py-24">
        <div className="animate-fade-in space-y-8 max-w-2xl">
          <div>
            <p className="text-foodbuck-orange font-semibold text-lg mb-4">
              Premium Dining Experience
            </p>
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
              Culinary <span className="text-foodbuck-orange">Excellence</span>
            </h1>
            <p className="text-xl text-foodbuck-gray-muted leading-relaxed max-w-xl">
              Welcome to FoodBuck, where innovation meets tradition. Experience
              exquisitely crafted cuisine in an atmosphere of refined elegance.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Link href="/menu">
              <Button className="bg-foodbuck-orange hover:bg-foodbuck-orange/90 text-foodbuck-black font-semibold px-8 py-6 text-base">
                Explore Menu
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="px-8 py-6 text-base text-foodbuck-black"
              >
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-foodbuck-black to-transparent" />
    </div>
  );
}
