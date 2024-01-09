const defaultFavState = { items: [] };

const favReducer = (state = defaultFavState, action) => {
  if (action.type === "TOGGLE_FAV") {
    const exitingId = state.items.findIndex((itemId) => itemId === action.id);
    //console.log(exitingId);
    let updatedItems;
    if (exitingId >= 0) {
      updatedItems = state.items.filter((itemId) => itemId !== action.id);
    } else {
      updatedItems = [...state.items, action.id];
    }
    return {
      items: updatedItems,
    };
  }
  return state;
};

export { favReducer, defaultFavState };
