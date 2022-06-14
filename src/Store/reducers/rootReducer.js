import { combineReducers } from "redux";
import ProductReducer from "./productReducer/ProductReducer";

const rootReducer = combineReducers({
    ProductReducer,
});

export default rootReducer;