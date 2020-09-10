import SHOP_DATA from "../../assets/product-data";

const INITIAL_STATE = {
  shopItems: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
