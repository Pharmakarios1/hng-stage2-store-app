import { Link } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import "../Components/Card/Card.css";
import "../Components/ProductHome/productDetails.css";
import { FaAngleRight } from "react-icons/fa";
import { verve, master, visaLogo, PayPal, Trash, chair1 } from "../assets";

const ProductDetails = () => {
  return (
    <div>
      <Nav />
      <div className="bread-crumb">
        home <FaAngleRight /> Furniture <FaAngleRight /> sofa <FaAngleRight />
        LuxeComfort Sectional Sofa <FaAngleRight /> Cart
      </div>
      <div className="product-detail-wrapper">
        <div className="product-top">
          <div className="product-img">
            <div className="cart-card">
              <div className="cart-card-content">
                <div className="cart-card-content-img">
                  <img src={chair1} alt="" />
                  <div className="text">
                    <h4>LuxeComfort Sectional Sofa</h4>
                    <p>1 Seater Sofa (Sand Beige)</p>
                    <span>In stock</span>
                  </div>
                </div>

                <div className="counter">
                  <button>-</button>
                  <p>0</p>
                  <button>+</button>
                </div>
                <div className="amount">
                  <p>$3500</p>
                  <del>$5400</del>
                </div>
              </div>
              <div className="trash">
                <img src={Trash} alt="" />
                Remove
              </div>
            </div>
            <div className="cart-card">
              <div className="cart-card-content">
                <div className="cart-card-content-img">
                  <img src={chair1} alt="" />
                  <div className="text">
                    <h4>LuxeComfort Sectional Sofa</h4>
                    <p>1 Seater Sofa (Sand Beige)</p>
                    <span>In stock</span>
                  </div>
                </div>

                <div className="counter">
                  <button>-</button>
                  <p>0</p>
                  <button>+</button>
                </div>
                <div className="amount">
                  <p>$3500</p>
                  <del>$5400</del>
                </div>
              </div>
              <div className="trash">
                <img src={Trash} alt="" />
                Remove
              </div>
            </div>
            <div className="cart-card">
              <div className="cart-card-content">
                <div className="cart-card-content-img">
                  <img src={chair1} alt="" />
                  <div className="text">
                    <h4>LuxeComfort Sectional Sofa</h4>
                    <p>1 Seater Sofa (Sand Beige)</p>
                    <span>In stock</span>
                  </div>
                </div>

                <div className="counter">
                  <button>-</button>
                  <p>0</p>
                  <button>+</button>
                </div>
                <div className="amount">
                  <p>$3500</p>
                  <del>$5400</del>
                </div>
              </div>
              <div className="trash">
                <img src={Trash} alt="" />
                Remove
              </div>
            </div>
            <div className="cart-card">
              <div className="cart-card-content">
                <div className="cart-card-content-img">
                  <img src={chair1} alt="" />
                  <div className="text">
                    <h4>LuxeComfort Sectional Sofa</h4>
                    <p>1 Seater Sofa (Sand Beige)</p>
                    <span>In stock</span>
                  </div>
                </div>

                <div className="counter">
                  <button>-</button>
                  <p>0</p>
                  <button>+</button>
                </div>
                <div className="amount">
                  <p>$3500</p>
                  <del>$5400</del>
                </div>
              </div>
              <div className="trash">
                <img src={Trash} alt="" />
                Remove
              </div>
            </div>
          </div>
          <div className="cart-desc">
            <div className="cart-desc-flex">
              <h4>Order Summary</h4>
              <h4>4 item</h4>
            </div>
            <div className="cart-desc-flex-item">
              <h5>Delivery Charges</h5>
              <span>
                Enter your delivery address at checkout to view Delivery costs.
              </span>
            </div>
            <div className="cart-desc-item-total">
              <p>Subtotal</p>
              <p>$3500</p>
            </div>
            <div className="cart-desc-item-total">
              <h4>Total</h4>
              <p>$3,900</p>
            </div>
            <div className="cart-desc-delivery">
              <p>Excluding Delivery Charges</p>
            </div>
            <button className="btn-cart">
              <Link to="/checkout">Continue to CheckOut</Link>
            </button>
            <div className="payment-option">
              <span>We accept</span>
              <img src={visaLogo} alt="" />
              <img src={master} alt="" />
              <img src={verve} alt="" />
              <img src={PayPal} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
