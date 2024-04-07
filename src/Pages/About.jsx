import React from "react";

const About = () => {
  return (
    <section className="pt-16 bg-whitesmoke">
      <div className="align-element">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center ">
          <div className="lg:w-[50%]">
            <h1 className="text-2xl mb-4 md:mb-6 md:text-4xl lg:text-5xl ">
              About Us
            </h1>
            <div className="space-y-4 md:space-y-8">
              <p className="md:text-lg">
                Welcome to Kofe , where every cup tells a story. At Kofe, we're
                more than just passionate about coffee; we're obsessed. Our
                journey began with a simple belief: that exceptional coffee
                experiences should be accessible to everyone.
              </p>
              <p className="md:text-lg">
                Founded in the heart of coffee culture, our story begins with a
                group of coffee aficionados determined to bring the finest beans
                from around the world to your cup. What started as a small
                venture in a cozy café has evolved into a thriving community of
                coffee lovers united by their quest for quality and flavor.
              </p>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <img
              src="/about.webp"
              alt="coffe beans and cup of coffee"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
