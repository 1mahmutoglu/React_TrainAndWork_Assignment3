import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { getcartReducer } from "./slices/cartSlice";


export const mystore = configureStore
    ({
        reducer: {
            products: productReducer,
            cart: getcartReducer,
    
          
        }
    })