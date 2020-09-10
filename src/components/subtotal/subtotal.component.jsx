import React from "react";
import { connect } from "react-redux";

import CurrencyFormat from "react-currency-format";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./subtotal.style.css";

const Subtotal = ({ cartItems }) => {
  const getTotalItemsInCart = (cartItems) => {
    return cartItems.reduce((total, item) => (total += item.quantity), 0);
  };

  const getTotalPriceForItems = (cartItems) => {
    return cartItems.reduce(
      (total, item) => (total += item.price * item.quantity),
      0
    );
  };

  return (
    <div className="subtotal">
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

      <button>Proceed to checkout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Subtotal);
