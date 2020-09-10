import React, { useEffect } from "react";
import { connect } from "react-redux";

import { auth } from "./firebase/firebase";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import Checkout from "./components/checkout/checkout.component";
import Category from "./components/category/category.component";
import Login from "./components/login/login.component";
import Alert from "./components/alert/alert.component";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectAlertObj } from "./redux/alert/alert.selectors";

import "./App.css";

function App({ setUser, alert }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth && userAuth.emailVerified !== false) {
        const { displayName, email, photoURL } = userAuth;

        setUser({
          displayName,
          email,
          photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path="/login" component={Login} />
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
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
