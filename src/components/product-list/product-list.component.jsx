import React from "react";
import { connect } from "react-redux";

import CategoryItem from "../category-item/category-item.component";

import { selectShopItems } from "../../redux/shop/shop.selectors";

import "./product-list.style.css";

const ProductList = ({ shopItems, category }) => {
  return (
    <div className="productList">
      <div className="productList__ad">
        {shopItems[category].ad.map((ad, idx) => (
          <img key={idx * 10} src={ad} alt="Ad" />
        ))}
      </div>

      <div className="productList__container">
        {shopItems[category].items.map(({ id, ...otherProps }) => (
          <CategoryItem key={id} id={id} otherProps={otherProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopItems: selectShopItems(state),
});

export default connect(mapStateToProps)(ProductList);
