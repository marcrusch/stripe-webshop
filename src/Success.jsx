import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Success() {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5">Your payment was successful!</Typography>
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
    </div>
  );
}
