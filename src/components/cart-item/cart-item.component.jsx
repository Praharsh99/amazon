import React from "react";
import { connect } from "react-redux";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Button } from "@material-ui/core";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";
import { setAlert } from "../../redux/alert/alert.actions";
import { selectDarkTheme } from "../../redux/theme/theme.selectors";

import "./cart-item.style.css";

const CartItem = ({
  addItem,
  removeItem,
  clearItem,
  setAlert,
  id,
  otherProps,
  hideButton,
  isDarkMode,
}) => {
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
    <div className={`cartItem ${isDarkMode && "cartItem--dark"}`}>
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

        {!hideButton && (
          <div className="cartItem__buttons">
            <Button variant="outlined" onClick={() => addItem(item)}>
              <AddIcon />
            </Button>

            <Button variant="outlined" onClick={() => removeItem(item)}>
              <RemoveIcon />
            </Button>

            <Button
              variant="outlined"
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
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: selectDarkTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  setAlert: (alert) => dispatch(setAlert(alert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
