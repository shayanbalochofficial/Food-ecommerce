import Image from 'next/image';
import { chefs } from '@/data/chef';

export default function ChefSection() {
  return (
    <section className="py-20 bg-foodbuck-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-foodbuck-orange">Chefs</span>
          </h2>
          <p className="text-foodbuck-gray-muted text-xl max-w-2xl mx-auto">
            The passionate professionals behind our culinary excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={chef.id}
              className="animate-slide-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foodbuck-black via-transparent to-transparent opacity-50" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-1">{chef.name}</h3>
              <p className="text-foodbuck-orange font-medium text-sm mb-3">{chef.title}</p>
              <p className="text-foodbuck-gray-muted text-sm leading-relaxed">{chef.bio}</p>
              </div>
          ))} 
        </div>
      </div>
    </section>
  );
}