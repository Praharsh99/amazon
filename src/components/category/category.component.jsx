import React from "react";

import ProductList from "../product-list/product-list.component";

import "./category.style.css";
const Category = ({ match }) => {
  return (
    <div className="category">
      <ProductList category={match.params.category} />
    </div>
  );
};

export default Category;
