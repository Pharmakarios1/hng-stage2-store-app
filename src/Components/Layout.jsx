import { Outlet, Link } from "react-router-dom";
import Product from "../Pages/ProductDetails";

const Layout = () => {
  return (
    <div>
      <Link to={<Product />} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
