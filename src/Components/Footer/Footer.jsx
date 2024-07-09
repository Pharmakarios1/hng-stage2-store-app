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
        <img src={footer_logo} alt="logo" />
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
          <p>Shop</p> <img src={angle_right} alt="angle-right" />
        </li>
        <li className="list-item">
          <p>Support</p> <img src={angle_right} alt="angle-right" />
        </li>
        <li className="list-item">
          <p> Contact</p> <img src={angle_right} alt="angle-right" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
