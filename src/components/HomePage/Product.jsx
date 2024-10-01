import React from "react";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";

import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products">
      <h1>Our Product Range </h1>

      <div className="pics">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="product">
              <img className="img-fluid" src={product1} alt="" />
              <h3>Bread</h3>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="product">
              <img className="img-fluid" src={product2} alt="" />
              <h3>Meat Pies</h3>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="product">
              <img className="img-fluid" src={product3} alt="" />
              <h3>Scones</h3>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="product">
              <img className="img-fluid" src={product4} alt="" />
              <h3>Donuts</h3>
            </div>
          </div>
        </div>
      </div>

      <Link to="/products">
        <button>VIEW COMPLETE RANGE</button>
      </Link>
    </div>
  );
};

export default Products;
