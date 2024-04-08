import React from "react";
import Card from "../Card";
import CardMedia from "../Card";
import { useLoaderData } from "react-router-dom";

const Featured = () => {
  const featured = useLoaderData();

  return (
    <section className="py-16">
      <div className="align-element">
        <div className="flex justify-center mb-5 md:mb-12 lg:mb-16">
          <h1 className="text-3xl font-semibold capitalize text-brownish-1 md:text-4xl lg:text-5xl">
            Our featured Menu
          </h1>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 ">
          {featured.map((coffee) => {
            return <CardMedia key={coffee.id} coffee={coffee} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
