import React from "react";
import Hero from "../ui/Section/Hero";
import Featured from "../ui/Section/Featured";
import About from "../ui/Section/About";
import { getCoffees } from "../services/apiCoffee";

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <About />
    </main>
  );
};

export const loader = async () => {
  const data = await getCoffees();

  const featured = data.filter((coffee) => coffee.featured === true);
  return featured;
};

export default Home;
