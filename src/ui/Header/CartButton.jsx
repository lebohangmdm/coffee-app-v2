import React, { useState } from "react";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { getCart, getTotalQuantity } from "../../features/cart/cartSlice";

const CartIcon = () => {
  const quantity = useSelector(getTotalQuantity);

  return (
    <IconButton color="inherit">
      <Badge badgeContent={quantity} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
