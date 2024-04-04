import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, marginInline: "auto" }}>
      <CardMedia
        sx={{ height: 180 }}
        image="/honey-spiced-latte.jpg"
        title="Honey Spiced Latte"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Honey Spiced Latte
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We combine rich molasses, golden honey and a host of spices to create
          this warm and comforting beverage.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">$ 12</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}
