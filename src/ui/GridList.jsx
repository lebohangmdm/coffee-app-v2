import React from "react";
import MediaCard from "./MediaCard";

const GridList = ({ coffees }) => {
  return (
    <div className="grid item-center gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3  ">
      {coffees.map((coffee) => {
        return <MediaCard key={coffee.id} coffee={coffee} number={50} />;
      })}
    </div>
  );
};

export default GridList;
