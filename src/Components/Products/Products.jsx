import "./Products.css";
// import data from "../../constants/data.js";
import Card from "../Card/Card.jsx";
import defaultExport from "../../constants/data.js";
import { heart } from "../../assets/index.js";
const Products = () => {
  console.log(defaultExport.chairs);
  return (
    <section>
      <div className="product">
        <div className="product-head">
          <h3>Shop by Room</h3>
          <p className="product-head-desc">
            Craft a space that beckons your return. Explore our meticulously
            curated collections, tailored with your preferences in mind.
          </p>
        </div>
        <div className="item-flex">
          {defaultExport.data.map((item) => {
            return (
              <Card.Card
                key={item.id}
                desc={item.desc}
                type={item.type}
                img={item.img}
              />
            );
          })}
        </div>

        <div className="products-items">
          <div className="product-header">
            <h3>BEST COLLECTION</h3>
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
        <div className="products-items">
          <div className="product-header">
            <h3>BEST SELLERS</h3>
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
    </section>
  );
};

export default Products;
