const initialState = {
  login: false,
  userInfo: {},
};

const type = {};

export const login = () => async (dispatch) => {
  const res = await test();
  console.log(res);
  dispatch({
    type: "save",
    payload: {
      num: res.test,
    },
  });
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
