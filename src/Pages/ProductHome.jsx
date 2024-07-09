import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import "../Components/ProductHome/productHome.css";
import { FaAngleRight } from "react-icons/fa";
import Card from "../Components/Card/Card.jsx";
import defaultExport from "../constants/data.js";
import { heart } from "../assets";

const ProductHome = () => {
  return (
    <div>
      <Nav />
      <div className="bread-crumb">
        home <FaAngleRight /> Furniture <FaAngleRight /> sofa
      </div>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li>
              <h4> Catergory</h4>
              <div>
                <input type="checkbox" />
                Comer Sofa
              </div>
              <div>
                <input type="checkbox" />
                L- Shipped Sofas
              </div>
              <div>
                <input type="checkbox" />
                Sofas cum bed
              </div>
              <div>
                <input type="checkbox" />
                Sofas
              </div>
            </li>
            <li>
              <h4>Seating Materials</h4>
              <div>
                <input type="checkbox" />
                Fabric
              </div>
              <div>
                <input type="checkbox" />
                Leather
              </div>
            </li>
            <li>
              <h4>Frame Materials</h4>
              <div>
                <input type="checkbox" />
                Solid wood
              </div>
              <div>
                <input type="checkbox" />
                Engineered wood
              </div>
            </li>
            <li>
              <h4>Color</h4>
              <div>
                <input type="checkbox" />
                Black
              </div>
              <div>
                <input type="checkbox" />
                Brown
              </div>
              <div>
                <input type="checkbox" />
                Red
              </div>
              <div>
                <input type="checkbox" />
                Grey
              </div>
              <div>
                <input type="checkbox" />
                Pink
              </div>
              <div>
                <input type="checkbox" />
                White
              </div>
            </li>
            <li>
              <h4>Price</h4>
              <div>
                <input type="checkbox" />
                Under $1000
              </div>
              <div>
                <input type="checkbox" />
                $1000 - $2500
              </div>
              <div>
                <input type="checkbox" />
                $2500 - $5000
              </div>
              <div>
                <input type="checkbox" />
                Newyork, USA
              </div>
              <div>
                <input type="checkbox" />
                Lead, UK
              </div>
            </li>
          </ul>
        </div>
        <div className="product-display">
          <div className="product-display-header">
            <h4>All Sofas</h4>
            <p>Sorted by</p>
            <div>
              <p>Relevance</p>
              <p className="active">Best Selling</p>
              <p>Price:Low to High</p>
              <p>Price:High to Low</p>
              <p>Date:Old to New</p>
              <p>Date:New to Old</p>
              <p>Featured</p>
            </div>
          </div>
          <div className="products">
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
          <div className="pagination">
            <div>Previous</div>
            <div>
              <ul>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>...</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
              </ul>
            </div>
            <div>Next</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductHome;
