import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const ViewCard = ({ coffee }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newCoffee = {
      id: coffee.id,
      name: coffee.name,
      image: coffee.image,
      quantity: 1,
      unitPrice: coffee.unitPrice,
    };

    dispatch(addItem(newCoffee));
  };

  return (
    <div
      key={coffee.id}
      className="flex gap-8 md:gap-10 lg:gap-14
  "
    >
      <div className="w-[40%] ">
        <img src={coffee.image} alt={coffee.name} />
      </div>
      <div className="w-[60%] ">
        <div className="space-y-3 mb-12">
          <h3 className="text-xl font-medium font-serif">{coffee.name}</h3>
          <p className="text-xl md:text-3xl font-bold ">R {coffee.unitPrice}</p>

          <p className="text-sm">{coffee.description}</p>
        </div>
        <button
          className={`text-lg font-semibold rounded-sm uppercase py-2 px-4  bg-brownish-1 hover:brightness-200 text-white hove transition-all duration-160`}
          onClick={handleAddItem}
        >
          Add to Cart
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default ViewCard;
