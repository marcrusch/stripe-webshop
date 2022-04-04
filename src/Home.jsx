import React from "react";
import Catalog from "./Catalog";

export default function Home({ cart, setCart }) {
  return (
    <div>
      <Catalog cart={cart} setCart={setCart} />
    </div>
  );
}
