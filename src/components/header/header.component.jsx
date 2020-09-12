import React, { useState } from "react";
import { connect } from "react-redux";

import { Link, useHistory } from "react-router-dom";

import { auth } from "../../firebase/firebase";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { setCurrentUser } from "../../redux/user/user.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { setAlert } from "../../redux/alert/alert.actions";
import { setSearchQuery } from "../../redux/search/search.actions";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { MenuItem, Button } from "@material-ui/core";

import "./header.style.css";

const Header = ({
  cartItems,
  currentUser,
  setUser,
  setAlert,
  setSearchQuery,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const getTotalItemsInCart = (cartItems) => {
    return cartItems.reduce((total, item) => (total += item.quantity), 0);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (e) => {
    auth.signOut();

    setUser(null);

    setAlert({
      type: "success",
      message: "User signed out successfully!",
    });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length > 0) {
      setSearchQuery(query.trim());

      history.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      <div className="header__shopByCategory">
        <Button onClick={() => setIsOpen(!isOpen)}>Shop by category</Button>

        {isOpen && (
          <div className="category__options">
            <Link to="/shop/books" onClick={() => setIsOpen(!isOpen)}>
              <MenuItem>Books</MenuItem>
            </Link>

            <Link to="/shop/electronics" onClick={() => setIsOpen(!isOpen)}>
              <MenuItem>Electronics</MenuItem>
            </Link>

            <Link to="/shop/hats" onClick={() => setIsOpen(!isOpen)}>
              <MenuItem>Hats</MenuItem>
            </Link>

            <Link to="/shop/gaming" onClick={() => setIsOpen(!isOpen)}>
              <MenuItem>Gaming</MenuItem>
            </Link>

            <Link to="/shop/grooming" onClick={() => setIsOpen(!isOpen)}>
              <MenuItem>Grooming</MenuItem>
            </Link>

            <Link to="/shop/sneakers" onClick={() => setIsOpen(!isOpen)}>
              <MenuItem>Sneakers</MenuItem>
            </Link>

            <Link to="/shop/sports" onClick={() => setIsOpen(!isOpen)}>
              <MenuItem>Sports</MenuItem>
            </Link>
          </div>
        )}
      </div>

      <form className="header__search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for products, eg: Google. Try it! its working..."
          className="header__searchInput"
        />
        <SearchIcon className="header__searchIcon" />
      </form>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">
            Hello {currentUser?.displayName || "Guest"}
          </span>

          {currentUser?.email ? (
            <span className="header__optionLineTwo" onClick={handleClick}>
              Sign Out
            </span>
          ) : (
            <Link to="/login">
              <span className="header__optionLineTwo">Sign In</span>
            </Link>
          )}
        </div>

        <Link className="header__option" to="/orders">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {getTotalItemsInCart(cartItems)}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setCurrentUser(user)),
  setAlert: (alert) => dispatch(setAlert(alert)),
  setSearchQuery: (query) => dispatch(setSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
