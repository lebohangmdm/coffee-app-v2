import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const MobileCartIcon = () => {
  const quantity = useSelector(getTotalQuantity);

  return (
    <Link to={"cart"} className="absolute right-2">
      <IconButton color="inherit">
        <Badge badgeContent={quantity} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default MobileCartIcon;
