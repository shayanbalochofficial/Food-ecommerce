export default function StatsSection() {
  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "50K+", label: "Satisfied Guests" },
    { number: "200+", label: "Unique Dishes" },
    { number: "5★", label: "Guest Rating" },
  ];

  return (
    <section className="py-20 bg-foodbuck-black-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-slide-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl font-bold text-foodbuck-orange mb-4">
                {stat.number}
              </div>

              <p className="text-foodbuck-gray-muted text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
