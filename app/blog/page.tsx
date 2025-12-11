import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "FoodBuck Blog",
  description:
    "Read our latest articles on culinary techniques, recipes, restaurant Insights and Business Insights.",
};

export default function Blog() {
  return (
    <div className="pt-20 pb-20">
      <div className="bg-foodbuck-black-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Our <span className="text-foodbuck-orange">Blog</span>
          </h1>
          <p className="text-foodbuck-gray-muted text-xl">
            Culinary insights and stories from our chefs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
              image={post.image}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
