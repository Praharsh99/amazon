import React from "react";
import { connect } from "react-redux";

import Subtotal from "../subtotal/subtotal.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./checkout.style.css";

const Checkout = ({ cartItems, currentUser }) => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad"
        />

        <div>
          <h2 className="checkout__title">
            Your shopping basket{" "}
            <img
              src="https://img.icons8.com/fluent/32/000000/shopping-cart.png"
              alt=""
            />
          </h2>

          {cartItems.length ? (
            cartItems.map(({ id, ...otherProps }) => (
              <CartItem key={id} id={id} otherProps={otherProps} />
            ))
          ) : (
            <h1 style={{ marginTop: "30px", textAlign: "center" }}>
              No items here!
            </h1>
          )}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Checkout);
