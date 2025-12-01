import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-black hero-background h-screen flex items-center">
      <div className="container mx-auto px-10 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Side ka Content */}
        <div className="text-white space-y-6">
          <p className="text-yellow-500 text-xl font-great-vibes">
            It's Quick & Amazing!
          </p>

          <h1 className="text-5xl font-bold">
            <span className="text-yellow-500">The</span> Art of Speed
            <br />
            Food Quality
          </h1>

          
            {/* Right side ka content */}
          <div className="relative">
            <Image
              src="/hero/heropic.svg"
              alt="Hero Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
