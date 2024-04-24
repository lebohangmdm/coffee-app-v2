import DisplayOptions from "../ui/DisplayOptions";
import SortSelectOptions from "../ui/SortSelectOptions";
import { getCoffees } from "../services/getCoffees";
import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import GridList from "../ui/GridList";
import ViewList from "../ui/ViewList";

const Menu = () => {
  const data = useLoaderData();

  const categories = new Set(
    data.map((coffee) => coffee.category.replace(/-/g, " "))
  );
  const allCategories = ["all", ...categories];
  const [category, setCategory] = useState("all");
  const [selectedValue, setSelectedValue] = useState("input");
  const [displayType, setDisplayType] = useState("grid");

  let coffees;
  if (category) {
    coffees =
      category === "all"
        ? data
        : data.filter((coffee) => coffee.category === category);
  }

  if (selectedValue === "input") coffees = coffees;
  if (selectedValue === "a-z")
    coffees = coffees.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (selectedValue === "z-a")
    coffees = coffees.slice().sort((a, b) => b.name.localeCompare(a.name));
  if (selectedValue === "high")
    coffees = coffees.slice().sort((a, b) => b.unitPrice - a.unitPrice);
  if (selectedValue === "low")
    coffees = coffees.slice().sort((a, b) => a.unitPrice - b.unitPrice);

  return (
    <>
      <section className="py-16 bg-menu">
        <div className="align-element mb-12 md">
          <div className="flex flex-col text-white space-y-4 md:space-y-6 md:w-3/4 lg:w-1/2">
            <h1 className=" text-4xl   uppercase md:text-5xl lg:text-6xl">
              Our Coffee and Crafting
            </h1>
            <p className="md:text-lg">
              It takes many hands to craft the perfect cup of coffee – from the
              farmers who tend to the red-ripe coffee cherries, to the master
              roasters who coax the best from every bean, and to the barista who
              serves it with care. We are committed to the highest standards of
              quality and service, embracing our heritage while innovating to
              create new experiences to savor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="align-element">
          <div className="grid gap-8 lg:grid-cols-200px-1fr">
            <div className="">
              <p className="text-xl font-semibold mb-4">Drinks</p>
              <ul className="flex flex-col space-y-2">
                {allCategories.map((category) => {
                  return (
                    <li
                      key={category}
                      className="text-lg font-medium uppercase cursor-pointer"
                      onClick={() => setCategory(category.replace(/ /g, "-"))}
                    >
                      {category}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-6">
              <div className="flex justify-between items-center">
                <DisplayOptions
                  displayType={displayType}
                  setDisplayType={setDisplayType}
                />
                <SortSelectOptions
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
              </div>
              {displayType === "grid" ? (
                <GridList coffees={coffees} />
              ) : (
                <ViewList coffees={coffees} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

export const loader = async () => {
  const data = await getCoffees();

  return data;
};
