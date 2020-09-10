export const addNewItemToCart = (allItems, newItem) => {
  const existingItem = allItems.find((item) => item.id === newItem.id);

  if (existingItem) {
    return allItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...allItems, { ...newItem, quantity: 1 }];
  }
};

export const removeItemFromCart = (allItems, itemToRemove) => {
  const existingItem = allItems.find((item) => item.id === itemToRemove.id);

  if (existingItem.quantity === 1) {
    return allItems.filter((item) => item.id !== itemToRemove.id);
  }

  return allItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const clearItemFromCart = (allItems, itemToClear) => {
  return allItems.filter((item) => item.id !== itemToClear.id);
};
