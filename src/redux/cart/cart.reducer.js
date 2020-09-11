import CartActionTypes from "./cart.types";
import {
  addNewItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  populateCartItems,
  emptyCart,
} from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addNewItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };

    case CartActionTypes.EMPTY_CART:
      return {
        ...state,
        cartItems: emptyCart(),
      };

    case CartActionTypes.POPULATE_CART_ITEMS:
      return {
        ...state,
        cartItems: populateCartItems(action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
