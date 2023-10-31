import * as actions from "../Actions/actions";
import { ActionType } from "../Actions/ActionTypes";
import { combineReducers } from "redux";


let initialShoppingCart: actions.Item[] = [];
function ShoppingCArt(state = initialShoppingCart, actions: actions.AddProduct) {
  state = [...state];
  switch (actions.type) {
    case ActionType.ADD_TO_CART:
      state.push(actions.payload);
      return state;
    case ActionType.REMOVE_TO_CART:
      let index = state.findIndex((item) => item.id === actions.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return state;
    case ActionType.CHECKED_OUT:
      state.length = 0;
      return state;
    case ActionType.ADD:
      {
        let productIndex = state.findIndex((item) => item.id === actions.payload.id);
        if (productIndex !== -1) {
          state[productIndex].quantity = (state[productIndex].quantity || 0) + 1;
        }
        return state;
      }
    case ActionType.SUBTRACT: {
      let productIndex = state.findIndex((item) => item.id === actions.payload.id);
      if (productIndex !== -1) {
        state[productIndex].quantity = (state[productIndex].quantity || 1) - 1;
      }
      return state;
    }
    default:
      return state;
  }
}

export default ShoppingCArt;

let initialCAtegoriesCart: actions.ShoppingCategories;
function AllCategories(
  state = initialCAtegoriesCart,
  actions: actions.ShoppingCategoriesDispatch
) {
  state = { ...state };
  switch (actions.type) {
    case ActionType.ALL_CATEGORIES:
      state = actions.payload;
      return state;

    default:
      return state;
  }
}


let loginStudent: any = {};
function UserLogin(state = loginStudent, action: any) {
  state = { ...state };
  switch (action.type) {
    case "Logged-In":
      state = action.payload;
      return state;

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  ShoppingCArt,
  UserLogin,
  AllCategories,
});
