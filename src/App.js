import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { auth, db } from "./firebase/firebase";

import { Switch, Route, Link } from "react-router-dom";

import history from "./history/history";

import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import Checkout from "./components/checkout/checkout.component";
import Category from "./components/category/category.component";
import Login from "./components/login/login.component";
import Alert from "./components/alert/alert.component";
import Payment from "./components/payment/payment.component";
import Orders from "./components/orders/orders.component";
import SearchResults from "./components/search-results/search-results.component.jsx";
import Glitch from "./components/glitch/glitch";

import { Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
  const [isOpen, setIsOpen] = useState(
    !!!localStorage.getItem("amazon-tour-data")
  );

  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);

  const handleIsOpen = () => {
    const status = localStorage.getItem("tour-status");

    if (status) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  };

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
      const docRef = db
        .collection("users")
        .doc(currentUser?.uid)
        .collection("cart")
        .doc(currentUser?.uid);

      docRef.get().then((doc) => {
        if (doc.exists) {
          populateCartItems(doc.data().cartItems);
        } else {
          populateCartItems([]);
        }
      });

      setCartUpdated(true);
    } else {
      populateCartItems([]);
    }
  }, [currentUser]);

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

      <Tour
        steps={steps}
        isOpen={isOpen}
        onRequestClose={handleIsOpen}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        disableKeyboardNavigation={true}
        rounded={5}
        lastStepNextButton={
          <Button
            variant="outlined"
            className="tour__lastButton"
            onClick={() => {
              localStorage.setItem("amazon-tour-data", true);
              localStorage.setItem("tour-status", true);
            }}
          >
            Close
          </Button>
        }
        showCloseButton={false}
      />
    </div>
  );
}

const steps = [
  {
    selector: "",
    content: () => (
      <div className="tour__firstSlide">
        <p style={{ textAlign: "center", marginBottom: "10px" }}>Welcome to</p>
        <Glitch data-glitch="Amazon">Amazon</Glitch>

        <div className="tour__madeWith">
          <p>
            Made with <FavoriteIcon style={{ color: "#d81b72" }} /> by{" "}
          </p>
          <a
            className="tour__creatorLink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/praharsh_paravastu/"
          >
            @praharsh_paravastu
          </a>
          <a
            className="tour__creatorLink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/cleverqazi/"
          >
            @cleverqazi
          </a>
          <a
            className="tour__creatorLink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ssssangha/"
          >
            @ssssangha
          </a>
          <a
            className="tour__creatorLink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/nazdumanskyy/"
          >
            @nazdumanskyy
          </a>
        </div>
      </div>
    ),
    style: {
      backgroundColor: "#000",
    },
  },
  {
    selector: ".header__shopByCategory",
    content: ({ goTo }) => (
      <div className="tour__secondSlide">
        <p>
          Click "Shop by category" link to see the list of categories. But, for
          now let me choose a category for you
        </p>

        <Link to="/shop/hats" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#007aff",
              color: "#fff",
              marginLeft: "35%",
              marginTop: "15px",
              marginBottom: "10px",
            }}
            onClick={() => {
              goTo(2);
            }}
          >
            Click Me
          </Button>
        </Link>

        <p>{" 🥼 🥾 🎩 ⚽ 💻 📒 ✂ "}</p>
      </div>
    ),
    action: () => {
      history.push("/shop/hats");
    },
  },
  {
    selector: ".category__filterOptions",
    content:
      "You can filter the products based on these options! Go on, try clicking one of them!",
  },
  {
    selector: ".itemContainer",
    content: "Did you like one? Add it to the basket and go to next step",
  },
  {
    selector: ".header__optionBasket",
    content: ({ goTo }) => (
      <div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <p>
            Here's your cart! You can go to your cart by clicking this button
          </p>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#007aff",
              color: "#fff",
              marginLeft: "35%",
              marginTop: "15px",
              marginBottom: "10px",
            }}
            onClick={() => {
              goTo(5);
            }}
          >
            Got to cart
          </Button>
        </Link>
      </div>
    ),
    stepInteraction: false,
  },
  {
    selector: "",
    content: () => (
      <div>
        <h2>That's it you are all set!</h2>
        <p style={{ margin: "10px 0", textAlign: "center" }}>
          Happy Shopping! {"🎉"}
        </p>
      </div>
    ),
  },
];

const mapStateToProps = (state) => ({
  alert: selectAlertObj(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setCurrentUser(user)),
  populateCartItems: (items) => dispatch(populateCartItems(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
