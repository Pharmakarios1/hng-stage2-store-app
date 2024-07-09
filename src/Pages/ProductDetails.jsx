import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import defaultExport from "../constants/data.js";
import "../Components/ProductHome/productDetails.css";
import Card from "../Components/Card/Card.jsx";
import { FaAngleRight } from "react-icons/fa";
import {
  W,
  cart_light,
  cetal,
  heart,
  product_img,
  share,
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
  wave,
} from "../assets";
import { RiStarSFill } from "react-icons/ri";

const ProductDetails = () => {
  return (
    <div>
      <Nav />
      <div className="bread-crumb">
        home <FaAngleRight /> Furniture <FaAngleRight /> sofa <FaAngleRight />{" "}
        LuxeComfort Sectional Sofa
      </div>
      <div className="product-detail-wrapper">
        <div className="product-top">
          <div className="product-img">
            <img src={product_img} alt="" />
          </div>
          <div className="cart-desc">
            <div className="cart-desc-flex">
              <h4>LuxeComfort Sectional Sofa</h4>
              <img src={heart} alt="" />
            </div>
            <div className="cart-desc-flex">
              <p>1 Seater Sofa (Sand Beige)</p> <img src={share} />
            </div>
            <div className="cart-desc-item-color">
              <p>Brown</p>
            </div>
            <div className="cart-desc-item-price">
              <p>$3,900</p>
              <del>$3950</del>
            </div>
            <div className="cart-display-item-rating">
              <p>Price incl. all taxes</p>
              <div className="cart-display-item-rating-stars">
                <div className="star">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                <p>14.6k Reviews</p>
              </div>
            </div>
            <div className="cart-desc-icons">
              <div>
                <img src={wave} alt="" />
              </div>
              Soft
            </div>
            <div className="cart-desc-icons">
              <div>
                <img src={cetal} alt="" />
              </div>
              Washable cover
            </div>
            <div className="cart-desc-icons">
              <div>
                <img src={W} alt="" />
              </div>
              2 year warranty
            </div>
            <button>
              <img src={cart_light} alt="" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product-img-square">
          <img src={square1} alt="" />
          <img src={square2} alt="" />
          <img src={square3} alt="" />
          <img src={square4} alt="" />
          <img src={square5} alt="" />
          <img src={square6} alt="" />
        </div>
        <div className="cart-desc-item-content">
          <p>
            The LuxeComfort Sectional Sofa blends modern elegance with superior
            comfort, featuring premium velvet upholstery and a solid hardwood
            frame. With high-density foam cushions and a reversible chaise, it
            offers versatile seating for 5-6 people. Available in multiple
            colors, it includes built-in USB charging ports and a hidden storage
            compartment. Price: $2,499 (inclusive of all taxes).
          </p>
          <p className="delivery-note">
            Delivery and assembly prices not included.
          </p>
          <p className="delivery-note">Article number</p>
          <span>#333447</span>
        </div>
        <div className="cart-desc-item-similar">
          <div className="cart-desc-item-similar-heading">
            <h3>SIMILAR PRODUCTS</h3>
            <h3>View All</h3>
          </div>
          <ul>
            {defaultExport.chairs.map((item) => {
              return (
                <Card.Card2
                  key={item.id}
                  desc={item.desc}
                  name={item.name}
                  heart={heart}
                  img={item.img}
                  price={item.price}
                  pricedec={item.pricedec}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
