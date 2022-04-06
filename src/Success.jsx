import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import SuccessMessage from "./SuccessMessags";
const PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const stripePromise = loadStripe(PUBLIC_KEY);

export default function Success() {
  const [params] = useSearchParams();
  const clientSecret = params.get("payment_intent_client_secret");
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Elements options={options} stripe={stripePromise}>
            <SuccessMessage />
          </Elements>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/">
          <Button size="small" color="primary">
            Return
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
