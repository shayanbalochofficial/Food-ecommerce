import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="pt-20 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Article Not Found
          </h1>
          <Link href="/blog">
            <span className="text-foodbuck-orange hover:text-foodbuck-orange/80">
              Back to Blog
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-foodbuck-orange hover:text-foodbuck-orange/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-foodbuck-gray-muted mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
            </div>

            <div className="inline-block bg-foodbuck-orange text-foodbuck-black px-4 py-2 rounded-full font-semibold text-sm">
              {post.category}
            </div>
          </header>

          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none mb-16">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-foodbuck-gray-muted text-lg leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="border-t border-foodbuck-black-surface pt-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              More from{" "}
              <span className="text-foodbuck-orange">{post.category}</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  title={relatedPost.title}
                  slug={relatedPost.slug}
                  excerpt={relatedPost.excerpt}
                  image={relatedPost.image}
                  category={relatedPost.category}
                  date={relatedPost.date}
                  readTime={relatedPost.readTime}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
