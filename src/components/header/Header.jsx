import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Shop from "../../pages/shop/Shop";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import SingleProduct from "../../pages/single-product/SingleProduct";
import account from "./img/account.png";
import search from "./img/search.png";
import wishlist from "./img/wishlist.png";
import cart from "./img/cart.png";

const Header = () => {
  return (
    <>
      <Router>
        <header>
          <div className="header-logo">Logo</div>
          <nav>
            <ul className="nav-list">
              <li className="nav-list-items">
                <Link to="/home" className="nav-list-items-links">
                  Home
                </Link>
              </li>

              <li className="nav-list-items">
                <Link to="/" className="nav-list-items-links">
                  Shop
                </Link>
              </li>
              <li className="nav-list-items">
                <Link to="/about" className="nav-list-items-links">
                  About
                </Link>
              </li>
              <li className="nav-list-items">
                <Link to="/contact" className="nav-list-items-links">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="nav-icons">
            <ul className="nav-icon-list">
              <li className="nav-icon-list">
                <a href="">
                  <img src={account} alt="" />
                </a>
              </li>
              <li className="nav-icon-list">
                <a href="">
                  <img src={search} alt="" />
                </a>
              </li>
              <li className="nav-icon-list">
                <a href="">
                  <img src={wishlist} alt="" />
                </a>
              </li>
              <li className="nav-icon-list">
                <a href="">
                  <img src={cart} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </header>
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/single-product" element={<SingleProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;
