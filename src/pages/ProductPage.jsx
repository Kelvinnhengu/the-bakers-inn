import producttab1 from "../assets/images/producttab1.png";
import producttab2 from "../assets/images/producttab2.png";
import producttab3 from "../assets/images/producttab3.png";
import shortbread from "../assets/images/recipe2.png";
import chips from "../assets/images/recipe3.png";
import producthero from "../assets/images/producthero.png"
import React, { useState } from "react";
import ProductsBread from "../components/ProductsBread";
const ProductPage = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="products-hero">
        <img src={producthero} alt="" />
        <h1>Our Product Range</h1>
      </div>
      <div className="ourProducts">
        <h2>Our Products</h2>

        <div className="bloc-tabs pb-5">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <li>Bread</li>
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <li className="overlay">Meat Pies</li>
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <li className="overlay">Scones</li>
          </div>
          <div
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            <li className="overlay">Donuts</li>
          </div>
        </div>
        <div className="content-tabs container">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <ProductsBread />
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <ProductsBread />
            meat
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            scones
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            donuts
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductPage;
