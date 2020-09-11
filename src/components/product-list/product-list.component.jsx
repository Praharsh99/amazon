import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { AnimatedList } from "react-animated-list";

import { Button } from "@material-ui/core";

import CategoryItem from "../category-item/category-item.component";

import { selectShopItems } from "../../redux/shop/shop.selectors";

import "./product-list.style.css";

const sortFunctions = {
  alphabetical: (a, b) => (a.title[0] > b.title[0] ? 1 : -1),
  alphabeticalRev: (a, b) => (b.title[0] > a.title[0] ? 1 : -1),
  lowHigh: (a, b) => a.price - b.price,
  highLow: (a, b) => b.price - a.price,
};

const ProductList = ({ shopItems, category }) => {
  const [filterBy, setFilterBy] = useState("alphabetical");

  const handleClick = (e) => {
    setFilterBy(e.target.id);
  };

  // useEffect(() => {}, [filterBy, setFilterBy]);

  return (
    <div className="productList">
      <div className="productList__ad">
        {shopItems[category].ad.map((ad, idx) => (
          <img key={idx * 10} src={ad} alt="Ad" />
        ))}
      </div>

      <div className="category__filterOptions">
        <p>Filter Options</p>
        <button onClick={handleClick} id="alphabetical">
          Name (alphabetical)
        </button>
        <button onClick={handleClick} id="alphabeticalRev">
          Name (Reverse)
        </button>
        <button onClick={handleClick} id="lowHigh">
          Price (Low to High)
        </button>
        <button onClick={handleClick} id="highLow">
          Price (High to Low)
        </button>
      </div>

      <div className="productList__container">
        <AnimatedList animation="zoom">
          {shopItems[category].items
            .sort(sortFunctions[filterBy])
            .map(({ id, ...otherProps }) => (
              <CategoryItem key={id} id={id} otherProps={otherProps} />
            ))}
        </AnimatedList>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopItems: selectShopItems(state),
});

export default connect(mapStateToProps)(ProductList);
