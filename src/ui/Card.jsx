import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ coffee, cartFull }) {
  return (
    <Card sx={{ maxWidth: 345, marginInline: "auto" }}>
      <CardMedia
        sx={{ height: 180 }}
        image={coffee.image}
        title={coffee.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {coffee.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {coffee.description}
        </Typography>
      </CardContent>
      <CardActions>
        {cartFull && <Button size="small">R {coffee.unitPrice}</Button>}

        <Button
          size="small"
          className={`${cartFull} ? w-full : "" bg-brownish-1 text-white hover:border-brownish-2 transition-all duration-160`}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
