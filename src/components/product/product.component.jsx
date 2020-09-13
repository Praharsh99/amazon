import React from "react";
import { connect } from "react-redux";

import { Button } from "@material-ui/core";

import { setAlert } from "../../redux/alert/alert.actions";
import { addItemToCart } from "../../redux/cart/cart.actions";

import { selectDarkTheme } from "../../redux/theme/theme.selectors";

import "./product.style.css";

const Product = ({
  id,
  title,
  price,
  image,
  rating,
  addNewItem,
  setAlert,
  isDarkMode,
}) => {
  const handleClick = () => {
    addNewItem({
      id,
      title,
      price,
      image,
      rating,
    });

    setAlert({
      type: "success",
      message: `Added ${
        title.length > 62 ? `${title.substring(0, 64)}...` : title
      } from cart`,
      submessage: `$${price}`,
      position: {
        bottom: "10px",
        right: "10px",
        transform: "translateX(0)",
      },
    });

    setTimeout(() => {
      setAlert(null);
    }, 10000);
  };

  return (
    <div className={`product ${isDarkMode && "product--dark"}`}>
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

      <Button onClick={handleClick}>Add to basket</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: selectDarkTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  addNewItem: (item) => dispatch(addItemToCart(item)),
  setAlert: (alert) => dispatch(setAlert(alert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
