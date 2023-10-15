import "./PageBreadCrumbs.css";
import { Link } from "react-router-dom";
const PageBreadCrumbs = () => {
  return (
    <>
      <div className="product-breadcrumbs">
        <ul>
          <li>
            <Link to="/" className="product-breadcrumbs-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="product-breadcrumbs-link">
              Shop
            </Link>
          </li>
          <li>
            <p className="product-breadcrumbs-link black">Asdard Sofa</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PageBreadCrumbs;
