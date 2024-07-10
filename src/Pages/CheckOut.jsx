import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import "../Components/ProductHome/Checkout.css";
import {
  alpha_logo2,
  visaLogo,
  PayPal,
  verve,
  master,
  chair1,
} from "../assets";
import { FaAngleRight } from "react-icons/fa";

const CheckOut = () => {
  return (
    <div>
      <div className="checkout-header">
        <img src={alpha_logo2} alt="" />
        <h4>CheckOut</h4>
      </div>
      <div className="bread-crumb-cart">
        home <FaAngleRight /> Furniture <FaAngleRight /> sofa <FaAngleRight />
        LuxeComfort Sectional Sofa <FaAngleRight /> Cart
      </div>
      <div className="product-detail-wrapper">
        <div className="product-items-wrapper">
          <div className="product-item">Lets take your Order</div>
          <div className="cart-desc-checkout">
            <div className="cart-desc-flex">
              <h4>ORDER DETAILS</h4>
              <h4>Update Cart</h4>
            </div>
            <div className="cart-items-amount">
              <img src={chair1} alt="" />
              <div>
                <h>LuxeComfort Sectional Sofa</h>
                <p>1 Seater Sofa (Sand Beige)</p>
                <h4>$3500</h4>
                <p>Quantity: 1</p>
                <span>+Delivery fee $20</span>
              </div>
            </div>
            <div className="cart-desc-item-total">
              <div className="delivery-fee">
                <p>Delivery fee</p>
                <p>$3500</p>
              </div>
              <div className="delivery-fee">
                <p>Subtotal</p>
                <p>$20</p>
              </div>
              <div className="delivery-fee">
                <p>Total</p>
                <p>$3520</p>
              </div>
            </div>
            <div className="cart-desc-total">
              <h4>Total</h4>
              <p>$3,900</p>
            </div>
            <button className="btn-checkout">
              <Link to="/checkout">Continue to CheckOut</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
