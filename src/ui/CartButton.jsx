import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<ShoppingCartIcon />}
      className="text-base rounded-md font-medium  capitalize py-1 px-4  bg-brownish-1 text-white hover:border-brownish-2 transition-all duration-160"
    >
      Cart
    </Button>
  );
};

export default CartButton;
