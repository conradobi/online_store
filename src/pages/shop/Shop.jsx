import Banner from "../../components/banner/Banner";
import { Link } from "react-router-dom";
import product1 from "./img/product1.png";
import product2 from "./img/product2.png";
import product3 from "./img/product3.png";
import product4 from "./img/product4.png";
import product5 from "./img/product5.png";
import product6 from "./img/product6.png";
import product7 from "./img/product7.png";
import product8 from "./img/product8.png";
import product9 from "./img/product9.png";
import product10 from "./img/product10.png";
import product11 from "./img/product11.png";
import product12 from "./img/product12.png";
import product13 from "./img/product13.png";
import product14 from "./img/product14.png";
import product15 from "./img/product15.png";
import product16 from "./img/product16.png";
import styled from "styled-components";

const StyledProductImage = styled.img`
  height: 150px;
  width: 200px;
`;
const StyledProductPrice = styled.p`
  color: #9f9f9f;
  font-size: 24px;
  font-family: Poppins;
  font-weight: 500;
  margin-top: 10px;
`;

const ProductTitle = styled.p`
  color: black;
  font-size: 42px;
  font-family: Poppins;
  font-weight: 400;
`;
const ProductList = () => {
  const products = [
    {
      title: "Trenton modular sofa_3",
      image: product1,
      price: "Rs. 25,000.00",
    },
    {
      title: "Granite dining table with dining chair",
      image: product2,
      price: "Rs. 25,000.00",
    },
    {
      title: "Outdoor bar table and stool",
      image: product3,
      price: "Rs. 25,000.00",
    },
    {
      title: "Plain console with teak mirror",
      image: product4,
      price: "Rs. 25,000.00",
    },
    {
      title: "Grain coffee table",
      image: product5,
      price: "Rs. 15,000.00",
    },
    {
      title: "Kent coffee table",
      image: product6,
      price: "Rs. 225,000.00",
    },
    {
      title: "Round coffee table_color 2",
      image: product7,
      price: "Rs. 251,000.00",
    },
    {
      title: "Reclaimed teak coffee table",
      image: product8,
      price: "Rs. 25,200.00",
    },
    {
      title: "Plain console_",
      image: product9,
      price: "Rs. 258,200.00",
    },
    {
      title: "Reclaimed teak Sideboard",
      image: product10,
      price: "Rs. 20,000.00",
    },
    {
      title: "SJP_0825 ",
      image: product11,
      price: "Rs. 200,000.00",
    },
    {
      title: "Bella chair and table",
      image: product12,
      price: "Rs. 100,000.00",
    },
    {
      title: "Granite square side table",
      image: product13,
      price: "Rs. 258,800.00",
    },
    {
      title: "Asgaard sofa",
      image: product14,
      price: "Rs. 250,000.00",
    },
    {
      title: "Maya sofa three seater",
      image: product15,
      price: "Rs. 115,000.00",
    },
    {
      title: "Outdoor sofa set",
      image: product16,
      price: "Rs. 244,000.00",
    },
  ];
  return (
    <>
      <Banner />
      <div className="products">
        <div className="product-row">
          {products.map((product, index) => (
            <div className="product-col" key={index}>
              <Link to="/single-product">
                <StyledProductImage
                  src={product.image}
                  alt=""
                  className="product-img"
                />
              </Link>
              <Link to="/single-product" className="pagetitle-links">
                <ProductTitle>{product.title}</ProductTitle>
              </Link>
              <StyledProductPrice>{product.price}</StyledProductPrice>
            </div>
          ))}
        </div>
        <div className="products-pagination">
          <div>
            <div className="products-pagination-btn">1</div>
            <div className="products-pagination-btn">2</div>
            <div className="products-pagination-btn">3</div>
            <div className="products-pagination-btn">Next</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
