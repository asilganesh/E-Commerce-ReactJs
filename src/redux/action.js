import axios from "axios";
import { ReduxStore } from "./store";

// Assuming ReduxStore has been correctly defined
const dispatch = ReduxStore.dispatch;

export function fetchProducts() {
    return () => {
        dispatch({
            type: "START_LOADING"
        });

        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                dispatch({
                    type: "FETCH_PRODUCT_SUCCESS",
                    payload: response.data
                });
                dispatch({
                    type: "STOP_LOADING"
                });
            })
            .catch(error => {
                console.error(error);
                // Handle error here
            });
    };
}


export function category(type){

    return {
        type:"CATEGORY",
        payload:type
    }

}

export function searchBy(type){

    return {
        type:"SEARCH",
        payload:type
    }
}

export function addToCart(data){

    return{
        type:"ADD_TO_CART",
        payload:data
    }
}

export function removeFromCart(data){

    return{
        type:"REMOVE_ITEM",
        payload:data
    }
}


export function increment(data){

    return{

        type:"INCREMENT",
        payload:data
    }
}

export function decrement(data){

    return{

        type:"DECREMENT",
        payload:data
    }
}
