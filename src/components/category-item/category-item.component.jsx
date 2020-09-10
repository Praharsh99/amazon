import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";

import "./category-item.style.css";

const CategoryItem = ({ id, otherProps, addNewItem }) => {
  const { title, price, image, rating } = otherProps;

  const handleClick = () => {
    addNewItem({
      id,
      title,
      price,
      image,
      rating,
    });
  };

  return (
    <div className="itemContainer">
      <img src={image} alt={title} />

      <div className="itemContainer__info">
        <div>
          <p>{title}</p>

          <p className="itemContainer__price">
            <strong>${price}</strong>
          </p>

          <div className="itemContainer__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i * 10}>{"⭐"}</p>
              ))}
          </div>
        </div>

        <button onClick={handleClick}>Add to basket</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);
