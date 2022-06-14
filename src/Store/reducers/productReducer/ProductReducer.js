import { GET_ALL_ADS, GET_CATEGORY } from "../../../Constants/constants";

let initialState = {
    Image : "",
    Price : "",
    Category :"",
    Model:"",
    products : []
}

function ProductReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ADS:
            return {
                ...state,
                products : action.payload
            }
        
        case GET_CATEGORY:
        console.log("reducer", action.payload);    
        return {
                ...state,
                products : action.payload
            }
    
        default:
            return state;
    }    
}

export default ProductReducer;