import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import CurrencyFormat from "react-currency-format";

import { Button } from "@material-ui/core";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { setAlert } from "../../redux/alert/alert.actions";
import { selectDarkTheme } from "../../redux/theme/theme.selectors";

import "./subtotal.style.css";

const Subtotal = ({ cartItems, setAlert, currentUser, isDarkMode }) => {
  const history = useHistory();

  const getTotalItemsInCart = (cartItems) => {
    return cartItems.reduce((total, item) => (total += item.quantity), 0);
  };

  const getTotalPriceForItems = (cartItems) => {
    return cartItems.reduce(
      (total, item) => (total += item.price * item.quantity),
      0
    );
  };

  const handleClick = () => {
    if (getTotalItemsInCart(cartItems) > 0) {
      if (currentUser) {
        history.push("/payment");
      } else {
        setAlert({
          type: "warning",
          message: "Can't proceed! Please log in to place orders",
        });

        setTimeout(() => {
          setAlert(null);
        }, 5000);
      }
    } else {
      setAlert({
        type: "warning",
        message: "Can't proceed! There are no items in the cart",
      });

      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  };

  return (
    <div className={`subtotal ${isDarkMode && "subtotal--dark"}`}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {" "}
              Subtotal ({getTotalItemsInCart(cartItems)} items):{" "}
              <strong>{value}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalPriceForItems(cartItems)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <Button onClick={handleClick}>Proceed to checkout</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  currentUser: selectCurrentUser(state),
  isDarkMode: selectDarkTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  setAlert: (alert) => dispatch(setAlert(alert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subtotal);
