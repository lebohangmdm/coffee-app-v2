import DisplayOptions from "../ui/DisplayOptions";
import SortSelectOptions from "../ui/SortSelectOptions";
import { getCoffees } from "../services/apiCoffee";
import { useLoaderData, useSearchParams } from "react-router-dom";

import { useState } from "react";
import GridList from "../ui/GridList";
import ViewList from "../ui/ViewList";
import NoResults from "../ui/NoResults";

const Menu = () => {
  const data = useLoaderData();

  const allCategories = [
    "all",
    "hot-coffee",
    "cold-coffee",
    "frappuccino",
    "hot-tea",
    "cold-tea",
  ];
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("input");
  const [displayType, setDisplayType] = useState("grid");
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const queryParamValue = searchParams.get("category");

  let coffees;
  if (category) {
    coffees =
      category === "all"
        ? data
        : data.filter((coffee) => coffee.category === category);
  }

  if (queryParamValue) {
    coffees =
      queryParamValue === "all"
        ? data
        : data.filter((coffee) => coffee.category === queryParamValue);
  }

  if (sortBy === "input") coffees = coffees;
  if (sortBy === "a-z")
    coffees = coffees.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "z-a")
    coffees = coffees.slice().sort((a, b) => b.name.localeCompare(a.name));
  if (sortBy === "high")
    coffees = coffees.slice().sort((a, b) => b.unitPrice - a.unitPrice);
  if (sortBy === "low")
    coffees = coffees.slice().sort((a, b) => a.unitPrice - b.unitPrice);

  const handleChange = (e) => {
    setSortBy(e.target.value);
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  };

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
                    <button
                      key={category}
                      className="text-lg font-medium uppercase cursor-pointer"
                      onClick={() => {
                        setCategory(category.replace(/ /g, "-"));
                        searchParams.set("category", category);
                        setSearchParams(searchParams);
                      }}
                    >
                      {category.replace(/-/g, " ")}
                    </button>
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
                <SortSelectOptions sortBy={sortBy} onChange={handleChange} />
              </div>
              {!coffees.length && <NoResults search={search} />}
              {displayType === "grid" && <GridList coffees={coffees} />}
              {displayType === "list" && <ViewList coffees={coffees} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  // Use URLSearchParams to get the search parameters
  const searchParams = new URLSearchParams(url.search);
  console.log(searchParams);
  const param = searchParams?.get("search") || "";
  console.log(param);
  const data = await getCoffees(param);

  return data;
};
