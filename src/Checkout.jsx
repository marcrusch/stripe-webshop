import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const stripePromise = loadStripe(PUBLIC_KEY);
export default function Checkout({ cart, setCart }) {
  const [clientSecret, setClientSecret] = useState("");
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [cart]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div>
      <Typography variant="h2">Checkout</Typography>
      <Box sx={{ marginBottom: "20px" }}>
        {cart.map((item) => (
          <CartItem product={item} cart={cart} setCart={setCart} />
        ))}
        <Typography variant="caption">Total: CHF {total}.-</Typography>
      </Box>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
