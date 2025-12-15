import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-foodbuck-black-card rounded-2xl border border-foodbuck-black-surface p-8 hover:border-foodbuck-orange/50 transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-foodbuck-orange text-foodbuck-orange"
          />
        ))}
      </div>
      <p className="text-foodbuck-gray-muted text-base leading-relaxed mb-6">
        {content}
      </p>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-foodbuck-gray-muted text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
