import React, { useState } from "react";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { getCart, getTotalQuantity } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const quantity = useSelector(getTotalQuantity);

  return (
    <Link to={"cart"}>
      <IconButton color="inherit">
        <Badge badgeContent={quantity} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartIcon;
