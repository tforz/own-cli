import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { useSelector } from "react-redux";

import toast, { Toast } from './toast';

const rootReducer = combineReducers({ toast });

export const store = createStore(rootReducer, composeWithDevTools());

export const Dispatch = {
  toast: {
    show: (value: string) => store.dispatch({ type: "toast/show", payload: value }),
    hide: () => store.dispatch({ type: "toast/hide" }),
  },
}

export interface Store {
  toast: Toast,
}

export function useStore<TSelected>(selector: (state: Store) => TSelected, equalityFn?: (left: TSelected, right: TSelected) => boolean) {
  return useSelector<Store, TSelected>(selector, equalityFn);
}
