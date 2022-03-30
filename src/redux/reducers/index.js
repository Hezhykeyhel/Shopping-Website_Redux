import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productsReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

export default reducers;