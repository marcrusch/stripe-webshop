import { Delete } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export default function CartItem({ product, cart, setCart }) {
  return (
    <Card sx={{ display: "flex", padding: "20px", marginBottom: "20px" }}>
      <CardMedia
        component="img"
        height="100"
        image={product.media}
        sx={{ flex: 1 }}
      />
      <CardContent sx={{ flex: 1, padding: 0, "&:last-child": { padding: 0 } }}>
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="caption">CHF {product.price}.-</Typography>
        <Button
          onClick={() => setCart(cart.filter((item) => item.id !== product.id))}
        >
          <Delete color="error" />
        </Button>
      </CardContent>
    </Card>
  );
}
