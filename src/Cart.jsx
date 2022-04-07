import { ShoppingCart } from "@mui/icons-material";
import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart({ cart, setCart }) {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="cart">
      <Button
        onClick={() => setCartOpen(!cartOpen)}
        sx={{ position: "absolute", right: 0, top: 0 }}
      >
        <ShoppingCart />
      </Button>
      <Drawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        anchor="right"
        sx={{ "& .MuiDrawer-paper": { padding: "20px" } }}
      >
        {cart.map((item) => (
          <CartItem
            product={item}
            cart={cart}
            setCart={setCart}
            key={`cart-item_${cart.indexOf(item)}`}
          />
        ))}
        <Link to={cart.length ? "/checkout" : ""}>
          <Button sx={{ float: "right" }} disabled={!cart.length}>
            Checkout
          </Button>
        </Link>
      </Drawer>
    </div>
  );
}
