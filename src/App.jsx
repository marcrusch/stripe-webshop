import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Layout from "./Layout";
import Success from "./Success";
import Cancel from "./Cancel";

export default function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home cart={cart} setCart={setCart} />} />
            <Route
              path="/checkout"
              element={<Checkout cart={cart} setCart={setCart} />}
            />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
