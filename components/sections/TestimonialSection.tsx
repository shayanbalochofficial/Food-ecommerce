import React from "react";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-foodbuck-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Guests <span className="text-foodbuck-orange">Say</span>
          </h2>
          <p className="text-foodbuck-gray-muted text-xl max-w-2xl mx-auto">
            Real experiences from our valued guests who&apos;ve experienced the
            FoodBuck difference.
          </p>
        </div>

        {/*  */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonials from Data */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
