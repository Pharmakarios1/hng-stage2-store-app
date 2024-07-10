import "./Hero.css";
import { hero } from "../../assets";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-image">{/* <img src={hero} alt="hero" /> */}</div>
        <div className="hero-about">
          <h2 data-aos="zoom-out">What We Represent</h2>
          <ul>
            <li data-aos="fade-right">Quality Craftsmanship</li>
            <li data-aos="zoom-out">Affordability</li>
            <li data-aos="zoom-out">Modern Aesthetics</li>
            <li data-aos="fade-left">Customer Satisfaction</li>
          </ul>
          {/* <p>Customer Satisfaction</p> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
