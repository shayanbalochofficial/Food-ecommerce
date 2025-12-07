import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: number;
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  image,
  category,
  date,
  readTime,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="group bg-foodbuck-black-card rounded-2xl overflow-hidden border border-foodbuck-black-surface hover:border-foodbuck-orange/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foodbuck-black via-transparent to-transparent opacity-50" />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-foodbuck-orange text-foodbuck-black text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-foodbuck-orange transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-foodbuck-gray-muted text-sm mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-foodbuck-gray-muted mb-4 pb-4 border-b border-foodbuck-black-surface">
          <span>{formattedDate}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readTime} min read
          </div>
        </div>

        <Link href={`/blog/${slug}`}>
          <Button variant="outline" className="w-full text-foodbuck-black">
            Read Article
          </Button>
        </Link>
      </div>
    </div>
  );
}
