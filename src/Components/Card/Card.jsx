// import { heart } from "../../assets";
import "./Card.css";

const Card = ({ img, desc, type }) => {
  return (
    <div className="card-wrapper">
      <div className="card-image-wrapper">
        <img src={img} />
        <p className="title">{type}</p>
      </div>

      <div className="card-desc">{desc}</div>
    </div>
  );
};
const Card2 = ({ img, desc, price, name, heart, pricedec }) => {
  return (
    <div className="card-outline">
      <div className="card-image-wrapper">
        <img src={img} />
      </div>
      <div className="namedheart">
        <p className="name">{name}</p>
        <img src={heart} />
      </div>
      <div className="card-descr">{desc}</div>
      <div className="price">
        <p>${price}</p>
        <del>${pricedec}</del>
      </div>
    </div>
  );
};

const Cards = { Card, Card2 };
export default Cards;