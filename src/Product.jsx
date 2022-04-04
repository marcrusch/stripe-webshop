import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Product({ product, cart, setCart }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="200" image={product.media} />
        <CardContent>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="caption">CHF {product.price}.-</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            setCart([...cart, product]);
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
