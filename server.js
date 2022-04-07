const express = require("express");
const products = require("./src/utils/products");
const app = express();
require("dotenv").config();

const SECRET_KEY = process.env.REACT_APP_STRIPE_SECRET_KEY;

// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")(SECRET_KEY);

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  let price = 0;
  items.forEach((item) => {
    price += products[item.id].price;
  });
  return price * 100;
};

app.post("/create-payment-intent", async (req, res) => {
  const items = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "chf",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
