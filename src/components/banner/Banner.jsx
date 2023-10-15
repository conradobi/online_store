import shoplogo from "./shoplogo.png"; 
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <img src={shoplogo} alt="" className="banner-content-icon" />
        <h3 className="banner-content-title">Shop</h3>
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default Banner;
