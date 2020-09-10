import React, { forwardRef } from "react";
import { connect } from "react-redux";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";
import { setAlert } from "../../redux/alert/alert.actions";

import "./cart-item.style.css";

const CartItem = forwardRef(
  ({ addItem, removeItem, clearItem, setAlert, id, otherProps }, ref) => {
    const { price, image, rating, title, quantity } = otherProps;
    const item = {
      id,
      price,
      image,
      rating,
      title,
      quantity,
    };

    return (
      <div ref={ref} className="cartItem">
        <img src={image} alt={title} />

        <div className="cartItem__info">
          <div className="cartItem__details">
            <p>{title}</p>

            <p className="cartItem__price">
              <strong>${price}</strong>
            </p>

            <div className="cartItem__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p key={i * 5}>{"⭐"}</p>
                ))}
            </div>

            <p className="cartItem__quantity">
              <strong>Quantity:</strong> {quantity}
            </p>
          </div>

          <div className="cartItem__buttons">
            <button onClick={() => addItem(item)}>
              <AddIcon />
            </button>

            <button onClick={() => removeItem(item)}>
              <RemoveIcon />
            </button>

            <button
              onClick={() => {
                clearItem(item);
                setAlert({
                  type: "success",
                  message: `Removed ${
                    item.title.length > 62
                      ? `${item.title.substring(0, 64)}...`
                      : item.title
                  } from cart`,
                  submessage: `$${item.price}`,
                  position: {
                    bottom: "10px",
                    right: "10px",
                    transform: "translateX(0)",
                  },
                });

                setTimeout(() => {
                  setAlert(null);
                }, 10000);
              }}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    );
  }
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  setAlert: (alert) => dispatch(setAlert(alert)),
});

export default connect(null, mapDispatchToProps)(CartItem);
