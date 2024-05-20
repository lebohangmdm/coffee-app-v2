import { useLoaderData } from "react-router-dom";
import { getCoffee } from "../services/apiCoffee";
import NumberInput from "../ui/NumberInput";

import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { useState } from "react";
import toast from "react-hot-toast";

const CoffeeDetail = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const {
    id,
    name,
    unitPrice,
    description,
    image,
    kj,
    fat,
    sugar,
    ingredients,
  } = useLoaderData();

  const handleAddItem = () => {
    const newCoffee = {
      id,
      name,
      image,
      quantity: parseInt(amount),
      unitPrice,
    };

    if (newCoffee.quantity < 1) return;

    dispatch(addItem(newCoffee));
    toast.success(`You have added ${name} to your cart`, {
      style: {
        fontSize: "14px",
        color: "#3c1b08",
        textTransform: "capitalize",
      },
    });
  };

  return (
    <section className="py-16">
      <div className="align-element">
        <div className="grid  md:grid-cols-2 gap-8 md:gap-12 lg:gap-14">
          <div>
            <img src={image} alt={name} className="object-cover mx-auto" />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-5xl mb-4">
              {name}
            </h3>
            <p className=" text-sm font-italian md:text-base mb-6 text-brownish-2 ">
              {description}
            </p>
            <p className="text-lg text-brownish-2 md:text-2xl mb-6 md:mb-10 lg:text-3xl font-medium">
              <span className="font-semibold">R</span>
              {unitPrice}
            </p>

            <div>
              <NumberInput
                amount={amount}
                setAmount={setAmount}
                onHandle={handleAddItem}
              />
            </div>
            <div className="mt-8 flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Ingredients</h3>
                <p className="font-medium max-w-[250px]">{ingredients}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Nutrition</h3>
                <p className="font-bold">
                  {kj}kj, {sugar}g sugar, {fat}g fat
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

  return coffee;
};

export default CoffeeDetail;
