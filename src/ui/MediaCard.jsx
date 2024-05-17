import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Btn from "./Btn";

export default function MediaCard({ coffee, cart, number }) {
  const [showMore, setShowMore] = useState(false);

  const description = showMore
    ? coffee.description
    : coffee.description.slice(0, number);

  return (
    <>
      <Link to={`/menu/${coffee.id}`}>
        <Card
          sx={{ maxWidth: 300, marginInline: "auto" }}
          className="transform hover:scale-105 transition-all duration-200 mt-4"
        >
          <CardMedia
            sx={{ height: 200 }}
            image={coffee.image}
            title={coffee.name}
            className="object-cover"
          />
          <CardContent>
            <p className="text-lg font-medium font-serif mb-2">{coffee.name}</p>

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
          <CardActions className=" px-4">
            <Typography
              variant="body2"
              color="text.secondary"
              className="font-semibold text-lg text-brownish-2"
            >
              R{coffee.unitPrice}
            </Typography>
          </CardActions>
        </Card>
      </Link>
    </>
  );
}
