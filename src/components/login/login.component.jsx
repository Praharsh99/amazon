import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";

import { setAlert } from "../../redux/alert/alert.actions";
import { selectDarkTheme } from "../../redux/theme/theme.selectors";

import {
  createAccountWithEmailAndPassword,
  signInWithGoogle,
  signInUser,
} from "../../firebase/firebase";

import "./login.style.css";

const Login = ({ setAlert, isDarkMode }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    displayName: "",
  });
  const [isNewAccount, setIsNewAccount] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    const result = await signInUser(email, password);

    if (result.status === "success") {
      setAlert({
        type: "success",
        message: "User signed in successfully!",
      });

      setTimeout(() => {
        setAlert(null);
      }, 5000);

      history.push("/");
    } else {
      setAlert({
        type: "error",
        message: result.message,
      });

      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();

    signInWithGoogle()
      .then((result) => {
        setAlert({
          type: "success",
          message: "User signed in successfully!",
        });

        setTimeout(() => {
          setAlert(null);
        }, 5000);

        history.push("/");
      })
      .catch((err) => {
        setAlert({
          type: "error",
          message: err.message,
        });

        setTimeout(() => {
          setAlert(null);
        }, 5000);
      });
  };

  const register = async (e) => {
    e.preventDefault();

    setIsNewAccount(true);

    const { email, password, displayName } = credentials;

    if (email.length > 0 && password.length > 0 && displayName.length > 0) {
      const result = await createAccountWithEmailAndPassword(
        email,
        password,
        displayName
      );

      if (result.status === "success") {
        setAlert({
          type: "success",
          message:
            "A verification link has been sent to your email! Please verify to proceed",
        });

        setTimeout(() => {
          setAlert(null);
        }, 6000);

        setIsNewAccount(false);
      } else {
        setAlert({
          type: "error",
          message: result.message,
        });

        setTimeout(() => {
          setAlert(null);
        }, 5000);
      }
    } else {
      setAlert({
        type: "warning",
        message: "Please fill all the fields",
      });

      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className={`login__logo ${isDarkMode && "login__logo--dark"}`}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={handleSubmit}>
          {isNewAccount && (
            <>
              <h5>Username</h5>
              <input
                type="text"
                name="displayName"
                value={credentials.displayName}
                onChange={handleChange}
                required
              />
            </>
          )}

          <h5>Email</h5>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          <Button type="submit" className="login__signInButton">
            Sign In
          </Button>

          <Button
            type="button"
            onClick={handleGoogleSignIn}
            className="login__googleSignInButton"
          >
            Sign In with google
          </Button>
        </form>

        <p>By signing-in you agree to the conditions of Use & Sale.</p>

        <Button
          variant="outlined"
          className="login__registerButton"
          onClick={register}
        >
          Create your Amazon account
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: selectDarkTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  setAlert: (alert) => dispatch(setAlert(alert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
