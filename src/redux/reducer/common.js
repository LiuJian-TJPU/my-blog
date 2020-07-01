const initialState = {
  b: 123,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "save":
      return {
        ...state,
        b: 456,
      };
    default:
      return state;
  }
};
export default reducer;
