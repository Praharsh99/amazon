import { firebase, db } from "../../firebase/firebase";

const updateFirestore = (cartItems) => {
  var user = firebase.auth().currentUser;

  if (user) {
    db.collection("users")
      .doc(user.uid)
      .collection("cart")
      .doc("OXhZbmxseXcR7kLCq0oS")
      .set({ cartItems });
  }
};

export const addNewItemToCart = (allItems, newItem) => {
  const existingItem = allItems.find((item) => item.id === newItem.id);

  if (existingItem) {
    const cartItems = allItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    updateFirestore(cartItems);

    return cartItems;
  } else {
    const cartItems = [...allItems, { ...newItem, quantity: 1 }];

    updateFirestore(cartItems);

    return cartItems;
  }
};

export const removeItemFromCart = (allItems, itemToRemove) => {
  const existingItem = allItems.find((item) => item.id === itemToRemove.id);

  if (existingItem.quantity === 1) {
    const cartItems = allItems.filter((item) => item.id !== itemToRemove.id);

    updateFirestore(cartItems);

    return cartItems;
  }

  const cartItems = allItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

  updateFirestore(cartItems);

  return cartItems;
};

export const clearItemFromCart = (allItems, itemToClear) => {
  const cartItems = allItems.filter((item) => item.id !== itemToClear.id);

  updateFirestore(cartItems);

  return cartItems;
};

export const emptyCart = () => {
  updateFirestore([]);

  return [];
};

export const populateCartItems = (allItems) => {
  return allItems;
};
