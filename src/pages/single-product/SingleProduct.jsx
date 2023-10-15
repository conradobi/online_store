import "./productpage.css";
import PageBreadCrumbs from "../../components/page-breadcrumbs/PageBreadCrumbs";
import Asgaard from "./img/Asgaard.png";
import thumbnail1 from "./img/thumbnail1.png";
import facebook from "./img/facebook.png";
import linkedin from "./img/linkedin.png";
import x from "./img/x.png";

import { useState } from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    // console.log(e.target.innerText);
    if (e.target.innerText === "-") {
      setQuantity(quantity - 1);
      if (quantity <= 1) {
        setQuantity(1);
      }
    } else if (e.target.innerText === "+") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <PageBreadCrumbs />
      <div className="row">
        <div className="col product-img">
          <div className="img-col-right">
            <div className="thumbnail">
              <img src={thumbnail1} alt="" />
            </div>
            <div className="thumbnail">
              <img src={thumbnail1} alt="" />
            </div>
            <div className="thumbnail">
              <img src={thumbnail1} alt="" />
            </div>
            <div className="thumbnail">
              <img src={thumbnail1} alt="" />
            </div>
          </div>
          <div className="main-product-img">
            <img src={Asgaard} alt="" />
          </div>
        </div>
        <div className="col product-text">
          <h2 className="product-title">Asgaard sofa</h2>
          <p className="product-price">Rs. 250,000.00</p>
          <div className="review">
            <span>XXXXX | 5 Customer Review</span>
            <p className="product-description">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div className="product-size">
              <p className="size">Size</p>
              <button className="btnSize">L</button>
              <button className="btnSize">XL</button>
              <button className="btnSize">XS</button>
            </div>
            <div className="product-color">
              <div className="color purple"></div>
              <div className="color black"></div>
              <div className="color gold"></div>
            </div>
            <div className="cart-calc">
              <div className="product-quantity">
                <button className="quantity-btn" onClick={handleQuantity}>
                  -
                </button>
                <p className="display-quantity">{quantity}</p>
                <button className="quantity-btn" onClick={handleQuantity}>
                  +
                </button>
              </div>
              <button className="addtocart">Add To Cart</button>
            </div>
          </div>
          <hr className="divider" />
          <div className="prduct-meta">
            <div>
              <small>SKU : SS001</small>
            </div>
            <div>
              <small>Category : SS001</small>
            </div>
            <div>
              <small>Tags : Sofa, Chair, Home, Shop</small>
            </div>
            <div>
              <small>SKU : SS001</small>
            </div>
            <div>
              <ul className="share">
                <li className="share-lists">
                  <a href="">
                    <img src={facebook} alt="" />
                  </a>
                </li>
                <li className="share-lists">
                  <a href="">
                    <img src={linkedin} alt="" />
                  </a>
                </li>
                <li className="share-lists">
                  <a href="">
                    <img src={x} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
