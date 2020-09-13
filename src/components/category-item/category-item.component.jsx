import React from "react";
import { connect } from "react-redux";

import { Button } from "@material-ui/core";

import { addItemToCart } from "../../redux/cart/cart.actions";
import { setAlert } from "../../redux/alert/alert.actions";
import { selectDarkTheme } from "../../redux/theme/theme.selectors";

import "./category-item.style.css";

const CategoryItem = ({ id, otherProps, addNewItem, setAlert, isDarkMode }) => {
  const { title, price, image, rating } = otherProps;

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
    <div className={`itemContainer ${isDarkMode && "itemContainer--dark"}`}>
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

        <Button onClick={handleClick}>Add to basket</Button>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
