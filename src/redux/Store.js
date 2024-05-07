import { configureStore } from "@reduxjs/toolkit";
import { Cart } from "./slice/Cartslice";
import { Loggedin } from "./slice/Loggedinslice";

export const Store = configureStore({
    reducer: {
        Cart: Cart.reducer,
        Loggedin : Loggedin.reducer
    }
})