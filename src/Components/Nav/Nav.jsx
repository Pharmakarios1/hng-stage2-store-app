import "./Nav.css";
import { alpha_logo2, cart, heart, menu, help } from "../../assets";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="logo">
          <img src={alpha_logo2} alt="alpha-logo" />
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
          <img src={cart} alt="cart" />
          <img src={menu} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
