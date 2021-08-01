import { BUY_CAKE } from "./cakeActionTypes";

const initialState = {
  noOfCakes: 20,
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};
