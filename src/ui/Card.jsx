import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export default function MediaCard({ coffee, cart, number }) {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();

  const description = showMore
    ? coffee.description
    : coffee.description.slice(0, number);

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
    <Card sx={{ maxWidth: 350, marginInline: "auto" }}>
      <Link Link to={`/menu/${coffee.id}`}>
        <CardMedia
          sx={{ height: 250, objectFit: "cover" }}
          image={coffee.image}
          title={coffee.name}
        />
      </Link>
      <CardContent>
        <Link to={`/menu/${coffee.id}`}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-serif hover:underline underline-offset-2"
          >
            {coffee.name}
          </Typography>
        </Link>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button
          variant="text"
          color="primary"
          className="text-sm text-brownish-2 mt-2"
          onClick={() => setShowMore((show) => !show)}
        >
          show more
        </Button>
      </CardContent>

      <CardActions className="flex items-center justify-between px-4 py-8">
        {!cart && (
          <Typography
            variant="body2"
            color="text.secondary"
            className="font-semibold text-lg text-brownish-2"
          >
            R {coffee.unitPrice}
          </Typography>
        )}

        {cart && (
          <button
            className={`${
              cart ? "w-full" : " "
            } text-base font-medium rounded-sm uppercase py-2 px-4  bg-brownish-1 text-white hover:brightness-200 transition-all duration-160`}
            onClick={handleAddItem}
          >
            Add to Cart
          </button>
        )}
      </CardActions>
    </Card>
  );
}
