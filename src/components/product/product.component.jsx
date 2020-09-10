import React, { forwardRef } from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";

import "./product.style.css";

const Product = forwardRef(
  ({ id, title, price, image, rating, addNewItem }, ref) => {
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
      <div className="product" ref={ref}>
        <div className="product__info">
          <p>{title}</p>

          <p className="product__price">
            <strong>${price}</strong>
          </p>

          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i * 5}>{"⭐"}</p>
              ))}
          </div>
        </div>

        <img src={image} alt={title} />

        <button onClick={handleClick}>Add to basket</button>
      </div>
    );
  }
);

const mapDispatchToProps = (dispatch) => ({
  addNewItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(Product);
