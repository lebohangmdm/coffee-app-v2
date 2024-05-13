import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<ShoppingCartIcon />}
      className="text-base rounded-md font-medium  uppercase py-1 px-4  bg-brownish-1 text-white hover:border-brownish-2 transition-all duration-160"
      onClick={onClick}
    >
      Update your cart
    </Button>
  );
};

export default CartButton;
