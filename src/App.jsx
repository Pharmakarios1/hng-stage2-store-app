import "./App.css";
import Layout from "./Components/Layout";
import Products from "./Components/Products/Products";
// import Nav from "./Components/Nav/Nav";
// import Products from "./Components/Products/Products";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductHome from "./Pages/ProductHome";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="Products" element={<ProductHome />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Checkout" element={<CheckOut />} />
          <Route path="Products/:slug" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
