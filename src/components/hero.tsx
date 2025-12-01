import React from "react";
import Image from "next/image";
import About from "./about";

const Hero = () => {
  return (
    <>
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
                className="relative z-10"
              />

              <div className="absolute top-1/4 left-[20%] w-16 h-16">
                <Image
                  src="/path-to-circle-item-1.svg"
                  alt="Item 1"
                  width={64}
                  height={64}
                />
              </div>
              <div className="absolute top-1/3 right-[15%] w-12 h-12">
                <Image
                  src="/path-to-circle-item-2.svg"
                  alt="Item 2"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <About/>
    </>
  );
};

export default Hero;
