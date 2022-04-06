import { Typography } from "@mui/material";
import { useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

export default function SuccessMessage() {
  const stripe = useStripe();
  const [paymentInfo, setPaymentInfo] = useState();
  const clientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret"
  );
  useEffect(() => {
    if (stripe) {
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        setPaymentInfo(paymentIntent);
      });
    }
  }, [clientSecret, stripe]);

  return (
    <Typography>
      {paymentInfo
        ? `Your payment of CHF ${paymentInfo.amount}.- was successful!`
        : ""}
    </Typography>
  );
}
