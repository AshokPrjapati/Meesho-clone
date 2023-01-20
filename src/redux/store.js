import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { addressReducer } from "./address/address.reducers";
import { cartReducer } from "./cart/cart.reducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    address: addressReducer
});

export const store = legacy_createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);