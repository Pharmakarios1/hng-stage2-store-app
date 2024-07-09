import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import "../Components/ProductHome/Checkout.css";
import { alpha_logo2 } from "../assets";

const CheckOut = () => {
  return (
    <div>
      <div className="checkout-header">
        <img src={alpha_logo2} alt="" />
        <h4>CheckOut</h4>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
