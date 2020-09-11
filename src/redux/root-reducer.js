import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import alertReducer from "./alert/alert.reducer";
import searchReducer from "./search/search.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  alert: alertReducer,
  search: searchReducer,
});
