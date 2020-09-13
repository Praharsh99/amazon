import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { AnimatedList } from "react-animated-list";

import Poster from "../../assets/credit-back-1.png";

import CurrencyFormat from "react-currency-format";

import axios from "../axios/axios";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import CartItem from "../cart-item/cart-item.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { emptyCart } from "../../redux/cart/cart.actions";
import { setAlert } from "../../redux/alert/alert.actions";
import { selectDarkTheme } from "../../redux/theme/theme.selectors";

import { Button } from "@material-ui/core";

import "./payment.style.css";

const Payment = ({
  currentUser,
  cartItems,
  emptyCart,
  setAlert,
  isDarkMode,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  useEffect(() => {
    // Get special stripe secret which allows us to charge customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payments/create?total=${getTotalPriceForItems(cartItems) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cartItems]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // Payment intent = payment confirmation

        db.collection("users")
          .doc(currentUser?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cartItems,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        emptyCart();

        history.replace("/orders");

        setAlert({
          type: "success",
          message: "Order placed successfully!",
        });

        setTimeout(() => {
          setAlert(null);
        }, 5000);
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const getTotalItemsInCart = (cartItems) => {
    return cartItems.reduce((total, item) => (total += item.quantity), 0);
  };

  const getTotalPriceForItems = (cartItems) => {
    return cartItems.reduce(
      (total, item) => (total += item.price * item.quantity),
      0
    );
  };

  console.log(clientSecret);

  return (
    <div className={`payment ${isDarkMode && "payment--dark"}`}>
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cartItems?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{`${currentUser?.displayName}, ${currentUser?.email}`}</p>
            <p>123 React Lane, ST 10</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="payment__section payment__section-items">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>

          <div className="payment__items">
            <AnimatedList animation={"zoom"}>
              {cartItems.map(({ id, ...otherProps }) => (
                <CartItem key={id} id={id} otherProps={otherProps} />
              ))}
            </AnimatedList>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <img src={Poster} alt="" />
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        {" "}
                        Subtotal ({getTotalItemsInCart(cartItems)} items):{" "}
                        <strong>{value}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getTotalPriceForItems(cartItems)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />

                <Button
                  type="submit"
                  variant="outlined"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : <p>Buy Now</p>}</span>
                </Button>
              </div>

              {error && <div className="payment__error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  cartItems: selectCartItems(state),
  isDarkMode: selectDarkTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(emptyCart()),
  setAlert: (alert) => dispatch(setAlert(alert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
