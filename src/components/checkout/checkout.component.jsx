import React from "react";
import { connect } from "react-redux";
import { AnimatedList } from "react-animated-list";

import { ReactComponent as EmptyCart } from "../../assets/empty_cart.svg";

import Subtotal from "../subtotal/subtotal.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectDarkTheme } from "../../redux/theme/theme.selectors";

import "./checkout.style.css";

const Checkout = ({ cartItems, currentUser, isDarkMode }) => {
  return (
    <div className={`checkout ${isDarkMode && "checkout--dark"}`}>
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
            <AnimatedList animation={"zoom"}>
              {cartItems.map(({ id, ...otherProps }) => (
                <CartItem key={id} id={id} otherProps={otherProps} />
              ))}
            </AnimatedList>
          ) : (
            <>
              <h2 style={{ marginTop: "30px", textAlign: "center" }}>
                No items in the cart! Go on, add some items and spend a little
                for yourself
              </h2>
              <EmptyCart
                className="checkout__emptyCartSvg"
                width={300}
                height={400}
              />
            </>
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
  isDarkMode: selectDarkTheme(state),
});

export default connect(mapStateToProps)(Checkout);
