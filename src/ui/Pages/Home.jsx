import React from "react";

const Home = () => {
  return (
    <section className="bg-coffee">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col space-y-8 w-3/4 sm:w-1/2 pt-16">
          <h1 className="text-4xl text-white  uppercase md:text-5xl lg:text-6xl">
            a smooth sip of liquid luxury
          </h1>
          <p className="text-white lg:text-lg">
            A coffee that is both smooth and creamy with luxuriously citrous
            flourish. This unique blend brings together the sweet citrus
            flavours of East African beans and the smooth body of Latin American
            beans, all roasted to the peak of their flavour
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
