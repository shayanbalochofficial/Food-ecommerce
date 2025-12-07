import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export default function BlogHighlightsSection() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-foodbuck-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            From Our <span className="text-foodbuck-orange">Blog</span>
          </h2>
          <p className="text-foodbuck-gray-muted text-xl max-w-2xl mx-auto">
            Culinary insights, techniques, and stories from our chefs and team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featured.map((post, index) => (
            <div
              key={post.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BlogCard
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                image={post.image}
                category={post.category}
                date={post.date}
                readTime={post.readTime}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button
              variant="outline"
              className="px-8 py-6 text-base text-foodbuck-black"
            >
              Read More Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
