import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import Btn from "./Btn";
import { Link } from "react-router-dom";

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
        <Link to={`/menu/${coffee.id}`}>
          <img src={coffee.image} alt={coffee.name} />
        </Link>
      </div>
      <div className="w-[60%] ">
        <div className="space-y-3 mb-12">
          <h3 className="text-xl font-medium font-serif text-brownish-2 capitalize">
            {coffee.name}
          </h3>
          <p className="text-xl md:text-3xl font-semibold ">
            R{coffee.unitPrice}
          </p>

          <p className="text-sm">{coffee.description}</p>
        </div>
        <Btn type={"medium"} onClick={handleAddItem}>
          Add to Cart
        </Btn>
      </div>
      <div></div>
    </div>
  );
};

export default ViewCard;
