import React from "react";

const CartQuantityInput = () => {
  return (
    <form>
      <input
        type="number"
        className="bg-transparent w-8 p-2 focus:outline-none focus:ring-2 rounded-sm ring-brownish-1 "
        min={1}
        name="quantity"
        defaultValue={1}
      />
    </form>
  );
};

export default CartQuantityInput;
