import "./Hero.css";
import { hero } from "../../assets";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-image">{/* <img src={hero} alt="hero" /> */}</div>
        <div className="hero-about">
          <h2>What We Represent</h2>
          <ul>
            <li>Quality Craftsmanship</li>
            <li>Affordability</li>
            <li>Modern Aesthetics</li>
            <li>Customer Satisfaction</li>
          </ul>
          {/* <p>Customer Satisfaction</p> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
