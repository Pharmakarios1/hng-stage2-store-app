import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import ProductHome from "./Pages/ProductHome";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="Products" element={<ProductHome />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Checkout" element={<CheckOut />} />
          <Route path="Products/Productdetails" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
