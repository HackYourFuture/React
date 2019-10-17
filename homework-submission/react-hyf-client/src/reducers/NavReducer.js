const navReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT':
      return [action.gender, action.url];
    default:
      return state;
  }
};

export default navReducer;
