import { h } from "preact";
import { useReducer } from "preact/hooks";
import { createContext } from "preact/compat";

import actions from "./actions";

export const Store = createContext();

const initialState = {
  dreams: [],
  isFetching: true,
  errors: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.DATA_REQUEST:
      return { ...state, isFetching: true };
    case actions.DATA_SUCCESS:
      console.log(action);
      return { ...state, dreams: action.payload, isFetching: false };
    case actions.DATA_ERROR:
      return { ...state, errors: action.errors };
    case actions.ADD_DREAM:
      return {
        ...state,
        dreams: [
          ...state.dreams,
          {
            id: state.dreams.length,
            title: action.dream,
            content: "",
          },
        ],
      };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
