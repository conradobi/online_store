import "./breadcrumbs.css";
import { Link } from "react-router-dom";
const Breadcrumbs = () => {
  return (
    <>
      <div className="breadcrumbs">
        <small>
          <ul className="breadcrumbs">
            <li>
              <Link to="/" className="breadcrumbs-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="breadcrumbs-link">
                Shop
              </Link>
            </li>
          </ul>
        </small>
        {/* <small>
          <ul className="breadcrumbs">
            <li>
              <a href>Home</a>
            </li>
            <li>
              <a href>Home</a>
            </li>
          </ul>
        </small> */}
      </div>
    </>
  );
};

export default Breadcrumbs;
