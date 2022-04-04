import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Cart from "./Cart";
import Product from "./Product";
import products from "./utils/products";

export default function Catalog({ cart, setCart }) {
  return (
    <div>
      <Box maxWidth={800} sx={{ position: "relative" }}>
        <Cart cart={cart} setCart={setCart} />
        <Typography variant="h2" sx={{ marginBottom: "20px" }}>
          Products
        </Typography>
        <Grid container spacing={5}>
          {products.map((product) => (
            <Grid item xs={4}>
              <Product
                cart={cart}
                setCart={setCart}
                key={`product_${products.indexOf(product)}`}
                product={{ ...product, id: products.indexOf(product) }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
