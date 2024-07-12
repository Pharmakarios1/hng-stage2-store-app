import "./Footer.css";
import {
  angle_right,
  footer_logo,
  social1,
  social2,
  social3,
} from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-wrapper">
        <img src={footer_logo} alt="logo" className="logo-img" />
        <p>
          Alpha Furniture, your go-to destination for stylish and affordable
          home furnishings. Our curated selection offers modern designs and
          timeless classics to transform any space. Enjoy seamless shopping with
          fast delivery and exceptional customer service. Elevate your home with
          Alpha Furniture today!
        </p>
        <div className="socials">
          <img src={social1} alt="" />
          <img src={social2} alt="" />
          <img src={social3} alt="" />
        </div>
      </div>

      <ul>
        <li className="list-item">
          <p>
            <ul>
              <h3> Shop</h3>
              <li className="none-in-mobile">Furniture</li>
              <li className="none-in-mobile">Best Sellers</li>
              <li className="none-in-mobile">Kitchen & Dining</li>
              <li className="none-in-mobile">Tech & Bar</li>
            </ul>
          </p>{" "}
          <img src={angle_right} alt="angle-right" />
        </li>
        <li className="list-item">
          <p>
            {" "}
            <ul>
              <h3>Support</h3>
              <li className="none-in-mobile">Return Portal</li>
              <li className="none-in-mobile">Shipping Policy</li>
              <li className="none-in-mobile">Privacy Policy</li>
              <li className="none-in-mobile">Piracy Policy</li>
            </ul>
          </p>{" "}
          <img src={angle_right} alt="angle-right" />
        </li>
        <li className="list-item">
          <p>
            {" "}
            <ul>
              <h3>Connect</h3>
              <li className="none-in-mobile">Blogs</li>
              <li className="none-in-mobile">About US</li>
              <li className="none-in-mobile">Account/Login</li>
              <li className="none-in-mobile">Contact Us</li>
            </ul>
          </p>{" "}
          <img src={angle_right} alt="angle-right" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
