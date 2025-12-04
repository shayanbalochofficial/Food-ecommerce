import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-foodbuck-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-foodbuck-orange">Story</span>
            </h2>
            <p className="text-foodbuck-gray-muted text-lg leading-relaxed mb-4">
              FoodBuck was born from a passion for culinary excellence and a
              commitment to innovation. Our founder, Victoria Sterling,
              envisioned a space where art, science, and tradition converge on
              every plate.
            </p>
            <p className="text-foodbuck-gray-muted text-lg leading-relaxed">
              Every dish at FoodBuck tells a story of precision, creativity, and
              respect for ingredients. We believe in pushing boundaries while
              honoring culinary heritage, creating unforgettable dining
              experiences that transcend expectations.
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3407778/pexels-photo-3407778.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Restaurant ambiance"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foodbuck-black to-transparent opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
