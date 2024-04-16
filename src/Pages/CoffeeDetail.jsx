import { useLoaderData } from "react-router-dom";
import { getCoffee } from "../services/getCoffees";
import NumberInput from "../ui/NumberInput";
import { Button } from "@mui/material";

const CoffeeDetail = () => {
  const { name, unitPrice, description, image, kj, fat, sugar } =
    useLoaderData();

  return (
    <section className="py-16  height-vh ">
      <div className="align-element">
        <div className="grid  md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div>
            <img src={coffee.image} alt={name} className="object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-5xl mb-4">
              {name}
            </h3>
            <p className=" text-sm font-italian md:text-base mb-6 text-brownish-2 ">
              {description}
            </p>
            <p className="text-lg text-brownish-2 md:text-2xl mb-6 md:mb-10 lg:text-3xl">
              <span className="font-semibold">R </span>
              {unitPrice}
            </p>

            <div>
              <NumberInput />
            </div>
            <div className="mt-8 flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Ingredients</h3>
                <p>Water, Brewed Espresso.Water</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Nutrition</h3>
                <p className="">
                  <strong>{kj}</strong>kj, <strong>{sugar}</strong>g sugar,{" "}
                  <strong>{fat}</strong>g fat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const loader = async ({ params }) => {
  const { id } = params;
  const coffee = await getCoffee(id);
  console.log(id);
  return coffee;
};

export default CoffeeDetail;
