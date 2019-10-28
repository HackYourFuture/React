const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH':
      return [action.loading, action.data];
    default:
      return state;
  }
};

export default reducer;
