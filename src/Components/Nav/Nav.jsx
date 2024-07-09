import "./Nav.css";
import { alpha_logo2, cart, heart, menu, help } from "../../assets";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={alpha_logo2} alt="alpha-logo" />
          </Link>
        </div>
        <div className="center">
          <div className="search">
            <input
              type="search"
              name="search"
              placeholder="What are you looking for? search here"
              className="search-bar"
            />
            <CiSearch className="searh-icon" />
          </div>
          <div className="help-bar">
            <img src={help} alt="help-icon" />
            <p>Help</p>
            <FaAngleDown />
          </div>
        </div>
        <div className="menu">
          <img src={heart} alt="likee" />
          <div className="cart">
            <Link to="/cart">
              <img src={cart} alt="cart" />
              <span className="cart-counter">4</span>
            </Link>
          </div>
          <img src={menu} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
