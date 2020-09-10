import CartActionTypes from "./cart.types";

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload: item,
});
