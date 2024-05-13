import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../features/cart/cartSlice";
import { toast } from "react-hot-toast";

const CartQuantityInput = ({ id, count, name }) => {
  const [amount, setAmount] = useState(count);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity = parseInt(amount);
    dispatch(updateQuantity({ id, quantity }));
    toast.success(`You have updated ${name} from the cart`, {
      style: {
        fontSize: "14px",
        marginTop: "64px",
        color: "#3c1b08",
        textTransform: "capitalize",
      },
      iconTheme: {
        primary: "green", // Icon color
        secondary: "white", // Icon background color
      },
    });
  };

  const handleChange = (e) => {
    // Check if the input is a number
    if (!isNaN(e.target.value)) {
      setAmount(e.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        className="bg-transparent w-8 p-2 focus:outline-none focus:ring-2 rounded-sm ring-brownish-1 text-center "
        min={1}
        name="quantity"
        value={amount}
        onChange={handleChange}
      />
    </form>
  );
};

export default CartQuantityInput;
