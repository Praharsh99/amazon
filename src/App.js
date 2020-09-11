import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { auth, db } from "./firebase/firebase";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import Checkout from "./components/checkout/checkout.component";
import Category from "./components/category/category.component";
import Login from "./components/login/login.component";
import Alert from "./components/alert/alert.component";
import Payment from "./components/payment/payment.component";
import Orders from "./components/orders/orders.component";
import SearchResults from "./components/search-results/search-results.component.jsx";

import { setCurrentUser } from "./redux/user/user.actions";
import { populateCartItems } from "./redux/cart/cart.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectAlertObj } from "./redux/alert/alert.selectors";

import "./App.css";

const promise = loadStripe(
  "pk_test_51HPvRkArvXHDYOCtTD6mOnJlzqQONYGmzEuyolBkD5AyzBDmmakBHi9XdN1GumVUTFffnuZOm448WpDyjgcTpntb00eAUXidFe"
);

function App({ setUser, populateCartItems, alert, currentUser }) {
  const [cartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth && userAuth.emailVerified !== false) {
        const { displayName, email, photoURL, uid } = userAuth;

        setUser({
          uid,
          displayName,
          email,
          photoURL,
        });
      } else {
        setUser(null);
        setCartUpdated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (currentUser && !cartUpdated) {
      db.collection("users")
        .doc(currentUser?.uid)
        .collection("cart")
        .doc("OXhZbmxseXcR7kLCq0oS")
        .get()
        .then((doc) => {
          if (doc.exists) {
            populateCartItems(doc.data().cartItems);
          }
        });

      setCartUpdated(true);
    } else {
      populateCartItems([]);
    }
  }, [currentUser, populateCartItems]);

  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/search" component={SearchResults} />
        <Route path="/orders" component={Orders} />
        <Route path="/payment">
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/shop/:category" component={Category} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/" component={Home} />
      </Switch>

      {alert && (
        <Alert
          message={alert.message}
          submessage={alert.submessage}
          type={alert.type}
          position={alert?.position}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  alert: selectAlertObj(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setCurrentUser(user)),
  populateCartItems: (items) => dispatch(populateCartItems(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
