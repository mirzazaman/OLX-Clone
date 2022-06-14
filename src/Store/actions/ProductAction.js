import { db } from "../../Config/firebaseConfig";
import { GET_ALL_ADS, GET_CATEGORY } from "../../Constants/constants";


export const AllProductAction = () => async (dispatch) => {

    try {

        let products = []
        let res = await db.collection("Products").get();
        res.forEach((doc) => {

            products.push({
                ...doc.data()
            })
        })

        dispatch({
            type: GET_ALL_ADS,
            payload: products,
        })
    }

    catch (error) {
        console.log("Error", error.message);
    }
}



export const CategoryProductAction = (category) => async (dispatch) => {

    try {
        let products = []

        let res = await db.collection("Products").where("Category", "==", category).get();

        res.forEach((doc) => {

            products.push({
                ...doc.data()
            })
        })

        dispatch({
            type: GET_CATEGORY,
            payload: products,
        })

        console.log("Action Done!");
    }

    catch (error) {
        console.log("Error", error.message);
    }
}